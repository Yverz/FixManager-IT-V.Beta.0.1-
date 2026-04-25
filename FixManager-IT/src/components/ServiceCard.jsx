import 'UsuarioCard.css'

function UsuarioCard({ nombre,rol,estado,imagen }) {
    const claseestado = estado === 'activo' ?  'badge-active' : 'badge-inactive';

    return (
        <div>
            <img src={imagen} alt={nombre} srcset="" />
            <div>
                <h3></h3>
                <p></p>
                <span></span>
            </div>
        <div>
            <button></button>
        </div>
    </div>
    );
}