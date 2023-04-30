import { NavLink } from 'react-router-dom'
import "./GalleryNavigation.css"

export default function GalleryNavigation({ galleries }) {
    console.log(galleries)
    return(
        <>
        <h1>Galleries</h1>
            <nav
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3em",
                }}>
                <NavLink exact to="/">/</NavLink>
                {galleries.map(gallery => (
                    <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                ))}
            </nav>
        </>
    )
}
