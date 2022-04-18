
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const tudorHouse = new Entity('tudorHouse')
engine.addEntity(tudorHouse)
tudorHouse.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tudorHouse.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("54567ede-7831-4a2a-b7cc-17676f514762/Tudor House.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
tudorHouse.addComponentOrReplace(gltfShape2)

const greenSycamoreTree2 = new Entity('greenSycamoreTree2')
engine.addEntity(greenSycamoreTree2)
greenSycamoreTree2.setParent(_scene)
const gltfShape3 = new GLTFShape("fd4168d3-1040-458d-b90e-fe5f441d593b/TreeSycamore_03/TreeSycamore_03.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
greenSycamoreTree2.addComponentOrReplace(gltfShape3)
const transform4 = new Transform({
  position: new Vector3(2, 0, 14.701255798339844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-0.7532499432563782, 0.8842812180519104, -0.6363003253936768)
})
greenSycamoreTree2.addComponentOrReplace(transform4)

const greenSycamoreTree = new Entity('greenSycamoreTree')
engine.addEntity(greenSycamoreTree)
greenSycamoreTree.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(14, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenSycamoreTree.addComponentOrReplace(transform5)
greenSycamoreTree.addComponentOrReplace(gltfShape3)
