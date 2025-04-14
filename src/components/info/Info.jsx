import React from 'react'

const Info = ({image, bgColor = '#464351'}) => {
    return (
        <section className="mt-[120px]">
            <div className="container mx-auto">
                <div style={{ backgroundColor: bgColor }} className="relative bg-[#464351] text-white rounded-[30px] flex items-center justify-between px-[60px] h-[323px] transition-all duration-300 shadow-[0_0_0px_rgba(0,0,0,0)] hover:shadow-[0_0_50px_10px_#ff8a8a]">

                    <div className="z-10">
                        <h2 className="text-[90px] font-extrabold">100%</h2>
                        <p className="text-lg">Material sifati</p>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <img className="w-[800px]" src={image} alt="Info Image" />
                    </div>

                    <div className="z-10 max-w-md">
                        <h2 className="text-[30px] font-semibold mb-5 leading-10">
                            "Ekologik Toza Uyqu Mahsulotlari"
                        </h2>
                        <p className="text-[16px] font-normal mb-5">
                            Ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan
                        </p>
                        <button className="py-2.5 px-8 bg-white text-black rounded-4xl mt-1.5">
                            To'plam
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info