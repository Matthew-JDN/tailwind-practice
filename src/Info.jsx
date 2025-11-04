const Name = (props) => {
  //destructuring
  const { fullname, bgColor, height } = props;
  return (
    <div
      style={{
        background: bgColor,
        paddingTop: 1,
        height: height + "px",
        textAlign: "center",
      }}
    >
      <h1 className="text-4xl">{fullname}</h1>
    </div>
  );
};

const Background = (props) => {
  const { age } = props;
  return (
    <div>
      <p>
        I'm BSIT student from bulacan state University, Im Currently 4th year
        student and Im {age} yrs old <br />
        My Tech stack is Native only but im learning react now
      </p>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div>
      <h3>My Hobbies</h3>
      <ul className="list-disc list-inside">
        <li>Computer game</li>
        <li>Basketball</li>
        <li>Coding</li>
      </ul>
    </div>
  );
};

const Projects = () => {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <h3>My Academic Project:</h3>
      <ol className="list-decimal list-inside">
        <li>DepTrack</li>
        <li>Attendance Monitoring System</li>
      </ol>
    </div>
  );
};

const Container = () => {
  return (
    <>
      <Name fullname="Lei Matthew C. Peralta" bgColor="lightblue" height={80} />
      <Background age={21} />
      <Hobbies />
      <Projects />
    </>
  );
};

export default Container;
