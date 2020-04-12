import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import { IoMdAdd } from 'react-icons/io';

import { Container } from './styles';

export default function InputFile() {
  const ref = useRef();
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  function handleChange(e) {
    const filePreview = e.target.files[0];
    if (filePreview) {
      setPreview(URL.createObjectURL(filePreview));
    } else {
      setPreview('');
    }
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="Avatar" />
        ) : (
          <IoMdAdd size={30} color="#ccc" />
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
