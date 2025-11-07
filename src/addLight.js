import * as Three from 'three'

export const addLight = () => {
    const light = new Three.DirectionalLight(0xffffff, 2)
    light.position.set(5, 5, 5)
    return light
}