// image
import Me from "./../../assets/image/me.jpg";
// style
import "./About.css";
function About() {
  const imageZoom = (imgID, resultID) => {
    let img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /* Set background properties for the result DIV */
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize =
      img.width * cx + "px " + img.height * cy + "px";
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("mouseleave", () => {
      lens.style.display = "none";
    });
    /* And also for touch screens: */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      let position, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      position = getCursorPos(e);
      /* Calculate the position of the lens: */
      x = position.x - lens.offsetWidth / 2;
      y = position.y - lens.offsetHeight / 2;
      /* Prevent the lens from being positioned outside the image: */
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      /* Set the position of the lens: */
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* Display what the lens "sees": */
      result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  };
  return (
    <div className=" row py-3 px-5 mb-3">
      <div
        onMouseEnter={() => {
          imageZoom("myimage", "myresult");
        }}
        className="AboutImageBox col-12 col-md-6 col-lg-4 text-center position-relative px-0 mx-0"
      >
        <img
          src={Me}
          id="myimage"
          alt="Me"
          className="AboutImage w-100 rounded-3"
        />
        <div id="myresult" class="img-zoom-result"></div>
      </div>
      <ul className="AboutInfo col-12 col-md-6 col-lg-8 d-flex align-items-center align-items-md-start flex-column justify-content-around ps-4 my-4 my-md-0">
        <li className="d-flex flex-column flex-md-row align-items-center d-md-block">
          <span className="AboutTitle cdefault">Name: </span>
          <span className="AboutValue cdefault fw-bold mt-1 mb-3 my-md-0">
            Ali Hafezi
          </span>
        </li>
        <li className="d-flex flex-column flex-md-row align-items-center d-md-block">
          <span className="AboutTitle cdefault">Birth: </span>
          <span className="AboutValue cdefault fw-bold mt-1 mb-3 my-md-0">
            January, 20, 2005
          </span>
        </li>
        <li className="d-flex flex-column flex-md-row align-items-center d-md-block">
          <span className="AboutTitle cdefault">Job: </span>
          <span className="AboutValue cdefault fw-bold mt-1 mb-3 my-md-0">
            Student
          </span>
        </li>
        <li className="d-flex flex-column flex-md-row align-items-center d-md-block">
          <span className="AboutTitle cdefault">Location: </span>
          <span className="AboutValue cdefault fw-bold mt-1 mb-3 my-md-0">
            Tehran, Iran, Ray
          </span>
        </li>
        <li className="d-flex flex-column flex-md-row align-items-center d-md-block">
          <span className="AboutTitle cdefault">Skill: </span>
          <span className="AboutValue cdefault fw-bold mt-1 mb-3 my-md-0">
            Front-end Developer
          </span>
        </li>
        <li className="d-flex flex-column flex-md-row align-items-center d-md-block">
          <span className="AboutTitle cdefault">Bio: </span>
          <span className="AboutValue cdefault text-center text-md-left fw-bold mt-1 mb-3 my-md-0">
            A young man with many limitations but loves programming and
            computers
          </span>
        </li>
      </ul>
      <div className="col-12 mt-4 text-center text-md-start">
        <span className="fw-bold fs-3 cdefault">Skills</span>
        <ul className="d-flex flex-wrap justify-content-center justify-content-md-start mt-2 px-0">
          <li className="AboutSkillsItem py-2 px-3 mb-1 mb-lg-0 fs-6 fw-bold rounded-3">
            HTML
          </li>
          <li className="AboutSkillsItem py-2 px-3 ms-2 mb-1 mb-lg-0 fs-6 fw-bold rounded-3">
            Css
          </li>
          <li className="AboutSkillsItem py-2 px-3 ms-2 mb-1 mb-lg-0 fs-6 fw-bold rounded-3">
            Bootstrap
          </li>
          <li className="AboutSkillsItem py-2 px-3 ms-2 mb-1 mb-lg-0 fs-6 fw-bold rounded-3">
            Javascript
          </li>
          <li className="AboutSkillsItem py-2 px-3 ms-2 mb-1 mb-lg-0 fs-6 fw-bold rounded-3">
            React js
          </li>
          <li className="AboutSkillsItem py-2 px-3 ms-2 mb-1 mb-lg-0 fs-6 fw-bold rounded-3">
            Redux-toolkit
          </li>
          <li className="AboutSkillsItem py-2 px-3 ms-2 mb-1 mb-lg-0 fs-6 fw-bold rounded-3">
            React js Libraries
          </li>
          <li className="AboutSkillsItem py-2 px-3 ms-2 mb-1 mb-lg-0 fs-6 fw-bold rounded-3">
            Typescript
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
