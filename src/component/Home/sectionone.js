import img1 from '../../Images/homesectionfirstimage.webp'

function sectionone() {
    return (
        <>
            <section id="first" className='pt-4'>
                <div className="container">
                    <div className="firstsectioncontent flex">
                        <div className="firstsectioncontenttext mt-auto mb-auto ">
                            <h2 className='text-6xl text-bold mb-9'>Financial Planning led Investment Management</h2>
                            <p className='text-2xl'>Our aim is to go beyond what is expected by our clients and provide a high-quality professional service,
                                driven by expertise and delivered through exceptional teamwork</p>
                            <div className='firstsectioncontentlink mt-4'>
                            <a href="#" className='inline-block border  hover:bg-[#b9975c] hover:text-white pt-3 pb-3 px-3 ps-3'>DISCOVER MORE</a>
                            </div>
                      
                        </div>

                        <div className="firstsectioncontentimage">
                          <img src={img1}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default sectionone