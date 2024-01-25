const List = ({ images }) => {
  return (
    <div>
      {images?.map((image) => {
        return (
          <img
            key={image.id}
            src={image.images.preview_gif.url}
            style={{ width: '100px', height: '100px', padding: '1rem' }}
          />
        );
      })}
    </div>
  );
};

export default List;
