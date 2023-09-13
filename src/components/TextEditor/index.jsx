import React from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import './styles.scss';

export default function TextEditor({ text, setText }) {
  return (
    <CKEditor
      config={{
        removePlugins: ['EasyImage', 'ImageUpload', 'MediaEmbed'],
      }}
      editor={ClassicEditor}
      data={text}
      // onReady={(editor) => {
      //   // You can store the "editor" and use when it is needed.
      //   console.log('Editor is ready to use!', editor);
      //   editor.editing.view.change((writer) => {
      //     writer.setStyle(
      //       'height',
      //       '500px',
      //       editor.editing.view.document.getRoot()
      //     );
      //   });
      // }}
      onChange={(event, editor) => {
        const data = editor.getData();
        setText(data);
      }}
      // onBlur={(event, editor) => {
      //   console.log('Blur.', editor);
      // }}
      // onFocus={(event, editor) => {
      //   console.log('Focus.', editor);
      // }}
    />
  );
}
