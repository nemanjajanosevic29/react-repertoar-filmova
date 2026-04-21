import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function MovieForm({ onSubmit, editMovie, onCancelEdit }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (editMovie) {
      setValue('title', editMovie.title);
      setValue('hall', editMovie.hall);
      setValue('price', editMovie.price);
      setValue('poster', editMovie.poster);
    } else {
      reset();
    }
  }, [editMovie]);

  const handleFormSubmit = (data) => {
    onSubmit({
      title: data.title,
      hall: Number(data.hall),
      price: Number(data.price),
      poster: data.poster
    });
    reset(); 
  };

  return (
    <div className="movie-form">
      <h3>{editMovie ? 'Izmeni film' : 'Dodaj novi film'}</h3>

      <form onSubmit={handleSubmit(handleFormSubmit)}>

        <div className="form-group">
          <label>Naslov *</label>
          <input
            {...register('title', { required: 'Naslov je obavezan' })}
            placeholder="Unesite naslov filma"
          />
          {errors.title && <span className="error">{errors.title.message}</span>}
        </div>

        <div className="form-group">
          <label>Sala *</label>
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
            {editMovie ? 'Sačuvaj izmene' : 'Dodaj film'}
          </button>

          {editMovie && (
            <button type="button" onClick={() => { onCancelEdit(); reset(); }}>
              Otkaži
            </button>
          )}
        </div>

      </form>
    </div>
  );
}

export default MovieForm;