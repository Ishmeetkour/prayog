const Student = () => {
  return (
    <div className="pt-10 min-h-screen bg-lightTheme-secondary text-lightTheme-text dark:bg-darkTheme-secondary dark:text-darkTheme-text">
      <section className="bg-slate-300 text-black text-lg font-medium mx-10 pb-5 rounded shadow ">
        <p className="mb-5 text-center text-2xl font-semibold">Profile</p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-0">
          <div className="w-100 flex md:flex-row flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center">
              <img className="h-40 w-40" src="/images/user.png" alt="" />
            </div>
            <div className="text-center md:text-start">
              <p>Divyanshu Naugai</p>
              <p>BTKIT Dwarahat</p>
              <p>Under Graduation</p>
              <p>Electronics</p>
            </div>
          </div>
          <div className="px-3 text-center md:text-start">
            <p className="text-xl font-semibold underline underline-offset-2 ">About</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dicta reprehenderit libero consectetur, asperiores ea delectus omnis cupiditate accusantium, rem expedita aliquam quia? Consectetur eligendi eius libero at laudantium autem.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Student