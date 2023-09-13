function Testimonial(){
    return (
        <section className="testimonial">

        
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="text-4xl font-bold text-center">What's Different About Manage?</h2>
            <div className="flex flex-col mt-24 md:flex-row md-space-x-6">
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src="img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
                    <h5 className="text-lg font-bold">Anisha Li</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        Manage has supercharged our teams workflow. The ability to maintain visibility on larger milestone at all times keeps everyone motivated
                    </p>
                </div>
                <div className="hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                    <img src="img/avatar-shanai.png" className="w-16 -mt-14" alt="" />
                    <h5 className="text-lg font-bold">Shanaya</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        Manage has supercharged our teams workflow. The ability to maintain visibility on larger milestone at all times keeps everyone motivated
                    </p>
                </div>
                <div className="hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                    <img src="img/avatar-richard.png" className="w-16 -mt-14" alt="" />
                    <h5 className="text-lg font-bold">Richard Branson</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        Manage has supercharged our teams workflow. The ability to maintain visibility on larger milestone at all times keeps everyone motivated
                    </p>
                </div>
            </div>
            <div className="my-16">
            <a href="#" className="hidden  p-3 px-6 pt-2  text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">Get Started</a>
            </div>
        </div>
        </section>
    )

}
export default Testimonial 