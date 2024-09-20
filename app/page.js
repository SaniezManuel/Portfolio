import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WorkIcon from '@mui/icons-material/Work';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


export default function Home() {
  return (
    <div className="w-[800px] m-auto min-h-screen p-8 pb-20">
      <h1 className= "text-[30px] font-bold mb-4">Saniez Manuel</h1>
      <div className='flex mb-3'><FmdGoodIcon/><p className='ml-3'>Buenos Aires, Argentina</p></div>
      <div className='flex'><WorkIcon/><p className='ml-3'>Full-stack Freelance Developer</p></div>
      
      <p className='mt-5 mb-4'>estudio ciencias de la computación. me gusta mucho crear proyectos y resolver problemas.
        también estoy interesado en el desarrollo de videojuegos principalmente con <a href='https://godotengine.org/' className='underline'>GodotEngine</a>.
        otros hobbys mios son dibujar, diseñar y los videojuegos.
      </p>

      
    <div className="">
        <div >
          <h1 className='text-[20px] font-bold mb-3'>proyectos</h1>
          <div>
            <h1 className='underline'><a href='https://vms.com.ar/'>VMS landing page</a></h1>
            <p>landing page diseñada con figma para un negocio familiar. la misma fue creada
              con HTML, CSS y Javascript vanila, la misma cuenta con un formulario de contacto
              que se conecta con una base de datos.
            </p>
          </div>
          <div className='mt-4'>
            <h1 className='underline'><a href='https://github.com/ssankoo/KoolBot'>KoolBot</a></h1>
            <p>bot de discord desarrollado con Discordjs, este cuenta con diferentes funciones
              entre ellas la de hacer un request a la API de tenor para enviar gifs o responder
              a diferentes mensajes.
            </p>
          </div>
          <div className='mt-4'>
            <h1 className='underline'><a href='https://ssankoo.github.io/ajikan-fan-web/'>Ajikan fan web</a></h1>
            <p>recreación de la landing page de la banda asian kung fu generation</p>
          </div>
          <div className='mt-4'>
            <h1 className='underline'><a href='https://github.com/ssankoo/BASICS-practice'>JS Practice</a></h1>
            <p>proyectos de javascript para practicar :)</p>
          </div>
          
          <h1 className='text-[20px] font-bold mt-3 mb-2'>contact</h1>
          <div className=' flex space-x-4'>
            <a href='https://github.com/ssankoo' className='flex'><GitHubIcon/><p className='pl-2 underline'>github</p></a>
            <a href='https://www.linkedin.com/in/manuel-saniez/' className='flex'><LinkedInIcon/><p className='pl-2 underline'>linkedin</p></a>
            <a href='https://cal.com/manuel-saniez' className='flex'><LocalPhoneIcon/><p className='pl-2 underline'>book a call!</p></a>
          </div>
        </div>
    </div>
    


    </div>
  );
}
