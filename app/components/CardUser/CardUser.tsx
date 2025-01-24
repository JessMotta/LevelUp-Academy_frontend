const CardUser = () => {
    return (
        <div className={`
            bg-primary rounded-[12px] w-[300px] h-auto mx-auto m-4
            `}>
            <div className="text-white flex p-4 items-center">
                <div>FOTO</div>
                <div>
                    <h3 className="text-base font-medium">Maria da Silva</h3>
                    <p className="text-[10px] font-medium">7º ano</p>
                    <div>
                        <div className="flex items-center">
                            <div className="mr-2">icone</div>
                            <div className="uppercase text-[10px] font-bold">Aprendiz</div>
                        </div>
                        <div>barra de progresso</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardUser;