import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
    { title: 'New Paltz Job and Event Finder', description: 'Lorem ipsum' },
    { title: 'Personal Blog', description: 'Lorem ipsum' },
    { title: 'Personal Website', destiption: 'Lorem ipsum' }
];

const Pslides = () => (
    <div>
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
  
  render(<Pslides />, document.getElementById("root"));
  