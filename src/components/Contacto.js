const Contacto = () => {
    return (
        <>
            <div>
                <h2>Contactate con nosotros</h2>
            </div>
            <section>
                <div>
                    <htmlform className="">
                        <label htmlFor="_nombre" id="nombre_contc"></label>
                        <input type="text" id="_nombre" placeholder="Nombre" required />
                        <label htmlFor="_email"></label>
                        <input type="email" id="_email" placeholder="Email" required />
                        <label htmlFor="_mensaje"></label><br />
                        <textarea id="_mensaje" rows="8" placeholder="Escribenos un mensaje" required></textarea>
                        <label htmlFor="_como"></label>
                        <select name="_como" id="_como" length>
                            <option defaultValue="0" disabled>Donde nos conociste?</option>
                            <option value="1">Una amiga</option>
                            <option value="2">Google</option>
                            <option value="4">Instagram</option>
                        </select>
                        <input type="submit" value="Enviar" />
                    </htmlform>
                </div>
                <div>
                    <img className="" src={contacto_img} alt="imagen" />
                </div>
            </section>
        </>
    );
}

export default Contacto;