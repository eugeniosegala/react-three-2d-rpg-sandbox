import { usePlane } from "@react-three/cannon";

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref} name="plane">
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={props.colour} />
    </mesh>
  );
};

export default Plane;
