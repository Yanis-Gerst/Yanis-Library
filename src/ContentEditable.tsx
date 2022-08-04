import React from 'react';

interface Props {
  className: string;
  data: string;
  onBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
  tagName: string;
  children: React.ReactNode;
}

const ContentEditable = ({
  className = '',
  data = '',
  onBlur,
  onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') e.target.blur();
  },
  tagName = 'div',
  children,
}: Props) => {
  const CustomTag: any = tagName;
  return (
    <>
      <CustomTag
        contentEditable="true"
        suppressContentEditableWarning={true}
        className={className}
        data-name={data}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      >
        {children}
      </CustomTag>
    </>
  );
};

export default ContentEditable;
