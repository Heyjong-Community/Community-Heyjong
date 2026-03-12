'use client';

import ReactQuill from 'react-quill-new';

const modules = {
  // toolbar what tools appear in the UI
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, false] }],
    ['bold', 'italic', 'underline'],
    [{ color: [] }, { background: [] }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ align: [] }],
    [{ size: ['small', false, 'large', 'huge'] }],
    ['link', 'image'],
  ],
};

const formats = [
  'header',
  'bold',
  'color',
  'background',
  'italic',
  'underline',
  'blockquote',
  'code-block',
  'list',
  'align',
  'size',
  'link',
  'image',
];

interface QuillEditorProps {
  value: string;
  onChange: (val: string) => void;
}

export default function QuillEditor({ value, onChange }: QuillEditorProps) {
  return <ReactQuill theme='snow' value={value} onChange={onChange} modules={modules} formats={formats} />;
}
