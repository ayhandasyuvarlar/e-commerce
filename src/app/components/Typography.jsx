export const Typography = ({
  tag,
  children,
  className,
  href,
  title,
  style,
  id,
  ...rest
}) => {
  const TagName = tag || "p"; // Varsayılan etiket <p> olarak ayarlandı

  return (
    <TagName
      className={className}
      style={style}
      href={href}
      title={title}
      id={id}
      {...rest}
    >
      {children}
    </TagName>
  );
};
