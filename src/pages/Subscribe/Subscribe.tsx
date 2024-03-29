// Importamos los componentes y los datos necesarios
import {
	Wrapper,
	Container,
	LeftColumn,
	RightColumn,
	Heading2,
	Form,
} from "./Subscribe.styles";
import Images from "./Subscribe.images";

// Definimos el componente Subscribe
export const Subscribe: React.FC = () => {
	return (
		// Renderizamos el contenedor principal
		<Wrapper>
			<Container>
				{/* // Renderizamos la columna izquierda con una imagen */}
				<LeftColumn>
					<picture>
						{/* // Definimos las fuentes de la imagen para diferentes tamaños y formatos */}
						<source
							sizes="1920w, 1280w, 640w"
							srcSet={`${Images.desktop.avif} 1920w, 
							${Images.tablet.avif} 1280w, 
							${Images.mobile.avif} 640w`}
							type="image/avif"
						/>
						<source
							sizes="1920w, 1280w, 640w"
							srcSet={`${Images.desktop.webp} 1920w, 
							${Images.tablet.webp} 1280w, 
							${Images.mobile.webp} 640w`}
							type="image/webp"
						/>
						<source
							sizes="1920w, 1280w, 640w"
							srcSet={`${Images.desktop.png} 1920w, 
							${Images.tablet.png} 1280w, 
							${Images.mobile.png} 640w`}
							type="image/jpeg"
						/>
						{/* // Renderizamos la imagen */}
						<img
							loading="lazy"
							decoding="async"
							src={Images.desktop.png}
							alt="A woman with a dog"
						/>
					</picture>
				</LeftColumn>
				{/* // Renderizamos la columna derecha con un título y un formulario */}
				<RightColumn>
					<Heading2>Subscribe & Get Pet Updatenews</Heading2>
					<Form>
						{/* // Renderizamos un campo de texto para el correo electrónico */}
						<input type="text" placeholder="Mail" />
						{/* // Renderizamos un botón para enviar el formulario */}
						<button type="submit" />
					</Form>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};
