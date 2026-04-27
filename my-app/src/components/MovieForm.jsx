import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById, createMovie, updateMovie } from '../services/movieService';

function MovieForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (isEdit) {
      const fetchMovie = async () => {
        try {
          const movie = await getMovieById(id);
          setValue('name', movie.name);
          setValue('hall', movie.hall);
          setValue('price', movie.price);
          setValue('poster', movie.poster);
        } catch (error) {
          setServerError('Greska pri ucitavanju filma.');
        }
      };
      fetchMovie();
    }
  }, [id]);

  const onSubmit = async (data) => {
    const movieData = {
      name: data.name,      
      hall: Number(data.hall),
      price: Number(data.price),
      poster: data.poster,
      likes: 0,
      dislikes: 0
    };

    try {
      if (isEdit) {
        await updateMovie(id, movieData);
      } else {
        await createMovie(movieData);
      }
      reset();
      navigate('/movies');
    } catch (error) {
      setServerError('Greska pri cuvanju filma. Proverite unete podatke.');
    }
};

  return (
    <div className="movie-form">
      <h3>{isEdit ? 'Izmeni film' : 'Dodaj novi film'}</h3>

      {serverError && <p className="error-msg">{serverError}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label>Naslov *</label>
          <input
            {...register('name', { required: 'Naslov je obavezan' })}
            placeholder="Unesite naslov filma"
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label>Sala * (1–12)</label>
          <input
            type="number"
            {...register('hall', {
              required: 'Sala je obavezna',
              min: { value: 1, message: 'Sala mora biti najmanje 1' },
              max: { value: 12, message: 'Sala može biti najviše 12' }
            })}
            placeholder="1 - 12"
          />
          {errors.hall && <span className="error">{errors.hall.message}</span>}
        </div>

        <div className="form-group">
          <label>Cena *</label>
          <input
            type="number"
            {...register('price', { required: 'Cena je obavezna' })}
            placeholder="npr. 350"
          />
          {errors.price && <span className="error">{errors.price.message}</span>}
        </div>

        <div className="form-group">
          <label>URL postera</label>
          <input
            {...register('poster')}
            placeholder="https://..."
          />
        </div>

        <div className="form-buttons">
          <button type="submit">
            {isEdit ? 'Sacuvaj izmene' : 'Dodaj film'}
          </button>
          <button type="button" onClick={() => navigate('/movies')}>
            Otkazi
          </button>
        </div>

      </form>
    </div>
  );
}

export default MovieForm;