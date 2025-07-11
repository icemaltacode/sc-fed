import { useMemo } from 'react';
import './App.css';

const images = [
  { fileName: "01.jpg", link: "#", title: "Barcelona Afternoon", artist: "Joan White" },
  { fileName: "02.jpg", link: "#", title: "Green on Yellow", artist: "John Dusseldorf" },
  { fileName: "03.jpg", link: "#", title: "Change of Scene", artist: "Lucy Pattersfield" },
  { fileName: "04.jpg", link: "#", title: "Into the Blue", artist: "Patrick McGee" },
  { fileName: "05.jpg", link: "#", title: "Feeling Yellow", artist: "Joe Trumpton" },
  { fileName: "06.jpg", link: "#", title: "The Fancy of Industry", artist: "Amerigo Fernandez" },
  { fileName: "07.jpg", link: "#", title: "90 Degrees of Yellow", artist: "Cristoff Bergmann" },
]

function ProjectTitle({title}) {
  return <div className="title"><h1>{title}</h1></div>
}

function GalleryImage({fileName, link, title, artist}) {
  const uuid = useMemo(() => crypto.randomUUID(), []);
  const getPath = () => `gallery/${fileName}`;
  return <a className="project" href={link}>
    <figure>
      <img src={getPath()} alt={title} title={title} data-uuid={uuid}/>
      <figcaption>
        <div>
          <h3>{title}</h3>
          <p className="cta">{artist}</p>
        </div>
      </figcaption>
    </figure>
  </a>
}

function Gallery({images}) {
  return <section className="xop-section">
    <div className="xop-wrapper">
      <div className="xop-container">
        {images.map((image, i) => 
          <GalleryImage 
            fileName={image.fileName}
            link={image.link}
            title={image.title}
            artist={image.artist}
            key={i}
          />
        )}
      </div>
    </div>
  </section>
}

function App() {
  return <>
    <header className="xopixel-header">
      <ProjectTitle title="Project Yellow" />
    </header>
    <Gallery images={images}/>
  </>
}

export default App;