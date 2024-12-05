export const models = [
  {
    id: 1,
    name: "Cube",
    description: "A simple rotating cube demonstrating basic 3D geometry",
    geometry: "BoxGeometry",
    params: [1, 1, 1],
    color: 0x00ff00
  },
  {
    id: 2,
    name: "Sphere",
    description: "A smooth sphere showing curved surfaces and lighting effects",
    geometry: "SphereGeometry",
    params: [1, 32, 32],
    color: 0xff0000
  },
  {
    id: 3,
    name: "Torus",
    description: "A torus (donut shape) showcasing complex geometric forms",
    geometry: "TorusGeometry",
    params: [1, 0.4, 16, 100],
    color: 0x0000ff
  },
  {
    id: 4,
    name: "Octahedron",
    description: "An eight-faced 3D shape with perfect symmetry",
    geometry: "OctahedronGeometry",
    params: [1],
    color: 0xff00ff
  },
  {
    id: 5,
    name: "Icosahedron",
    description: "A twenty-faced polyhedron with complex geometry",
    geometry: "IcosahedronGeometry",
    params: [1],
    color: 0xffff00
  }
];