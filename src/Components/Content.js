import React from "react";

function Content() {
  return (
    <div>
      <section class="">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="Images/banner-1.jpg"
                alt="First slide"
                style={{ height: "auto" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 "
                src="Images/banner-2.jpg"
                alt="Second slide"
                style={{ height: "90vh" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="Images/banner-3.jpg"
                alt="Third slide"
                style={{ height: "90vh" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light" id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">Know about us</h3>
            </div>
          </div>
          <div class="row">
            <p class="mt-4 mb-5">
              India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),
              is a country in South Asia. It is the seventh-largest country by
              area, the second-most populous country, and the most populous
              democracy in the world. Bounded by the Indian Ocean on the south,
              the Arabian Sea on the southwest, and the Bay of Bengal on the
              southeast, it shares land borders with Pakistan to the west;
              China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar
              to the east. In the Indian Ocean, India is in the vicinity of Sri
              Lanka and the Maldives; its Andaman and Nicobar Islands share a
              maritime border with Thailand, Myanmar and Indonesia.
            </p>
          </div>
        </div>
      </section>

      <section class="" id="destinations">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">
                Favourite Destinations
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/t-1.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-secondary">jammu and kashmir</h4>
                  <p class="card-text text-secondary">
                    Some major tourist attractions in Jammu and Kashmir are
                    Srinagar, the Mughal Gardens, Gulmarg, Pahalgam, Patnitop
                    and Jammu. Every year, thousands of Hindu pilgrims visit
                    Amarnath which has had significant impact on the state's
                    economy.
                  </p>
                </div>
                <div class="card-footer">
                  <a
                    href="https://en.wikipedia.org/wiki/Jammu_and_Kashmir_(union_territory)"
                    class="btn btn-primary"
                  >
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/t-2.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Uttarakhand</h4>
                  <p class="card-text text-secondary">
                    Uttarakhand has many tourist spots due to its location in
                    the Himalayas. There are many ancient temples, forest
                    reserves, national parks, hill stations, and mountain peaks
                    that draw large number of tourists. There are 44 nationally
                    protected monuments in the state.
                  </p>
                </div>
                <div class="card-footer">
                  <a
                    href="https://en.wikipedia.org/wiki/Uttarakhand"
                    class="btn btn-primary"
                  >
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/t-3.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Rajasthan</h4>
                  <p class="card-text text-secondary">
                    Rajasthan is home to many attractions for domestic and
                    foreign travellers, including the forts and palaces of
                    Jaipur, the lakes of Udaipur, the temples of Rajsamand and
                    Pali, sand dunes of Jaisalmer and Bikaner, Havelis of
                    Mandawa and Fatehpur.
                  </p>
                </div>
                <div class="card-footer">
                  <a
                    href="https://en.wikipedia.org/wiki/Rajasthan"
                    class="btn btn-primary"
                  >
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="" id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center text-secondary mt-4">
              Places and Description
            </h3>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Tourist Places
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  One of the oldest civilisations in the world, India is a
                  mosaic of multicultural experiences. With a rich heritage and
                  myriad attractions, the country is among the most popular
                  tourist destinations in the world. It covers an area of 32,
                  87,263 sq. km, extending from the snow-covered Himalayan
                  heights to the tropical rain forests of the south. As the 7th
                  largest country in the world, India stands apart from the rest
                  of Asia, marked off as it is by mountains and the sea, which
                  give the country a distinct geographical entity. Fringed by
                  the Great Himalayas in the north, it stretches southwards and
                  at the Tropic of Cancer, tapers off into the Indian Ocean
                  between the Bay of Bengal on the east and the Arabian Sea on
                  the west. As you travel the expanse of the country, you are
                  greeted by diverse nuances of cuisines, faiths, arts, crafts,
                  music, nature, lands, tribes, history and adventure sports.
                  India has a mesmeric conflation of the old and the new. As the
                  bustling old bazaars rub shoulders with swanky shopping malls,
                  and majestic monuments accompany luxurious heritage hotels,
                  the quintessential traveller can get the best of both worlds.
                  Head to the mountains, enjoy a beach retreat or cruise through
                  the golden Thar, India has options galore for all.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Best Destination
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Uttarakhand has many tourist spots due to its location in the
                  Himalayas. There are many ancient temples, forest reserves,
                  national parks, hill stations, and mountain peaks that draw
                  large number of tourists. There are 44 nationally protected
                  monuments in the state. Oak Grove School in the state is on
                  the tentative list for World Heritage Sites. Two of the most
                  holy rivers in Hinduism the Ganges and Yamuna, originate in
                  Uttarakhand. Binsar Devta is a popular Hindu temple in the
                  area.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Best Heritages
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Rajasthan is home to many attractions for domestic and foreign
                  travellers, including the forts and palaces of Jaipur, the
                  lakes of Udaipur, the temples of Rajsamand and Pali, sand
                  dunes of Jaisalmer and Bikaner, Havelis of Mandawa and
                  Fatehpur, the wildlife of Sawai Madhopur, the scenic beauty of
                  Mount Abu, the tribes of Dungarpur and Banswara, and the
                  cattle fair of Pushkar.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light mt-5" id="tourist">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">Tour Guides</h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/guide-1.jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Hashim Khan
                </h4>
                <h6 class="font-weight-bold blue-text my-3">Guide</h6>
                <p class="font-weight-normal dark-grey-text">
                  Hashim Khan is one of the senior tourist guide in Agra. He is
                  working as a Government Approved Tourist Guide in Agra city
                  since last 18 years. He has tourist guide license from
                  Ministry of Tourism & Culture, Government of India. He is
                  Graduate from Agra University.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/guide-2.jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">Naimuddin</h4>
                <h6 class="font-weight-bold blue-text my-3">Guide</h6>
                <p class="font-weight-normal dark-grey-text">
                  Naimuddin is also one of the best tour guide in Agra. He
                  started his tour guide since 2010, He is having a french
                  diploma, and has also completed his education from Agra. He
                  speaks french fluently. He has tourist guide license from
                  Ministry of Tourism & Culture, Government of India.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/guide-3.jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Shafiq Ahamad Khan
                </h4>
                <h6 class="font-weight-bold blue-text my-3">Guide</h6>
                <p class="font-weight-normal dark-grey-text">
                  My name is Shafiq Ahamad Khan, I born on 1975 in Agra city,
                  India. I have been working as a Government Approved
                  Professional tour guide in Agra city since 2005. I have tour
                  guide license from Department Of Tourism Government Of Uttar
                  Pradesh (India).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
