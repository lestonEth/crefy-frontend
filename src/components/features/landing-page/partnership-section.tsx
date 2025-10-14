import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const partners = [
  { id: 1, name: 'Microsoft', logo: 'https://altcoinsbox.com/wp-content/uploads/2023/02/full-base-logo.jpg' },
  { id: 2, name: 'Apple', logo: 'https://repository-images.githubusercontent.com/203989862/fcfb4700-cb27-11e9-8728-5e78075465cd' },
  { id: 3, name: 'Microsoft', logo: 'https://altcoinsbox.com/wp-content/uploads/2023/02/full-base-logo.jpg' },
  { id: 4, name: 'Google', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0b0vG4wIqo8UOfMp1xlp8XKpdFoMTtpsGYA&s' },
  { id: 5, name: 'Apple', logo: 'https://repository-images.githubusercontent.com/203989862/fcfb4700-cb27-11e9-8728-5e78075465cd' },
  { id: 6, name: 'Google', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0b0vG4wIqo8UOfMp1xlp8XKpdFoMTtpsGYA&s' },
];

function PartnershipSection() {
  return (
    <section className="partnership-section py-12 bg-white">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          autoplay={{
            delay: 0, // Zero delay for continuous motion
            disableOnInteraction: false, // Keep scrolling after interaction
            pauseOnMouseEnter: false, // Don't pause when mouse hovers
          }}
          loop={true}
          speed={3000} // Slower speed for smoother continuous motion
          freeMode={true} // Enables continuous scrolling without snap points
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 100,
            },
          }}
          className="partners-swiper"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="flex items-center justify-center h-20">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-8 max-w-full object-contain opacity-80"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PartnershipSection;