import { useQuery } from "@tanstack/react-query";
import { photos } from "../../services/photos";
import { Photo } from "../../types";

const PhotoGallery = () => {
  const { data, isFetching } = useQuery<Photo[]>(["photos"], photos.getAll, {
    initialData: [],
  });

  console.log(isFetching)

  return (
    <>
      {isFetching ? (
        <span>Loading...</span>
      ): (
        <>
          <h1>PhotoGallery</h1>
          <section>
            {data.map(({id, url, title}) => (
              <figure key={id}>
                <img src={url}/>
                <figcaption>{title}</figcaption>
              </figure>
            ))}
          </section>
          </>
      )}
    </>
  );
};

export default PhotoGallery;
