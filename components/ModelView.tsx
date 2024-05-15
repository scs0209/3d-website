import { ModelType } from "@/utils/types";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from "three";
import Lights from "./Lights";
import { Suspense } from "react";
import CanvasLoader from "./Loader";
import IPhone from "./IPhone";

type ModelViewProps = {
  index: number;
  groupRef: React.RefObject<THREE.Group>;
  gsapType: string;
  controlRef: React.RefObject<any>;
  setRotationState: (rotation: number) => void;
  item: ModelType;
  size: string;
};

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}: ModelViewProps) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`absolute z-10 w-full h-full ${
        index === 2 ? "right-[-100%]" : ""
      } `}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<CanvasLoader />}>
          <IPhone
            item={item}
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
