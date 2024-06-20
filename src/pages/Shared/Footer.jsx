const Footer = () => {
  return (
    <>
      <div className='bg-gray-900 text-white py-8 font-inter'>
        <div className='container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between'>
          {/* Contact Us Section */}
          <div className='flex flex-col items-center  md:w-1/2'>
            <h2 className='text-lg font-bold text-blue-400 mb-2'>CONTACT US</h2>
            <p>123 ABS Street, Unit 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>

          {/* Social Media Section */}
          <div className='flex flex-col items-center md:w-1/2 mt-6 md:mt-0'>
            <h2 className='text-lg font-bold mb-2'>Follow US</h2>
            <p>Join us on social media</p>
            <div className='flex space-x-4 mt-2'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
              >
                <svg
                  className='h-6 w-6 fill-current text-white hover:text-gray-400'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.892-4.788 4.657-4.788 1.325 0 2.462.099 2.795.142v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z' />
                </svg>
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <svg
                  className='h-6 w-6 fill-current text-white hover:text-gray-400'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.07 1.646.07 4.851s-.012 3.585-.07 4.851c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.07-4.85.07s-3.585-.012-4.851-.07c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608C2.175 15.585 2.163 15.204 2.163 12s.012-3.585.07-4.851c.062-1.366.343-2.633 1.318-3.608.975-.975 2.242-1.256 3.608-1.318C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.015 7.052.072 5.773.129 4.517.393 3.49 1.42 2.463 2.447 2.199 3.703 2.142 4.982.015 8.332 0 8.741 0 12c0 3.259.015 3.668.072 4.948.057 1.279.321 2.535 1.348 3.562 1.027 1.027 2.283 1.291 3.562 1.348 1.28.057 1.689.072 4.948.072s3.668-.015 4.948-.072c1.279-.057 2.535-.321 3.562-1.348 1.027-1.027 1.291-2.283 1.348-3.562.057-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.057-1.279-.321-2.535-1.348-3.562-1.027-1.027-2.283-1.291-3.562-1.348C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z' />
                </svg>
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
              >
                <svg
                  className='h-6 w-6 fill-current text-white hover:text-gray-400'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.563-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.926 2.203-4.926 4.917 0 .39.045.765.127 1.124-4.093-.205-7.725-2.165-10.148-5.144-.424.729-.666 1.571-.666 2.475 0 1.71.87 3.213 2.188 4.099-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.414-1.684 1.32-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.158-.067 2.179 1.393 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.635.961-.689 1.8-1.56 2.462-2.548l-.047-.02z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer footer-center p-4 bg-[#151515] text-white font-medium font-inter text-xl'>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Bistro Boss
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
