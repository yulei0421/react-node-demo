import { Scene, PolygonLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
const F2 = require('@antv/f2/lib/index');
const ScrollBar = require('@antv/f2/lib/plugin/scroll-bar');
import * as React from 'react';

export default class AMapExample extends React.Component {
    private scene: Scene;

    public componentWillUnmount() {
        F2.Chart.plugins.register(ScrollBar); // 这里进行全局注册，也可以给 chart 的实例注册
        new F2.Chart({
            id: 'canvas',
            plugins: ScrollBar
        });
        this.scene.destroy();
    }

   
    public async componentDidMount() {
        const response = await fetch(
            'https://gw.alipayobjects.com/os/basement_prod/d2e0e930-fd44-4fca-8872-c1037b0fee7b.json'
        );
        const scene = new Scene({
            id: 'map',
            map: new GaodeMap({
                center: [110.19382669582967, 50.258134],
                pitch: 0,
                style: 'dark',
                zoom: 3,
                token: 'pg.xxx' // 高德或者 Mapbox 的 token
            })
        });
        const layer = new PolygonLayer({});

        layer
            .source(await response.json())
            .size('name', [0, 10000, 50000, 30000, 100000])
            .color('name', ['#2E8AE6', '#69D1AB', '#DAF291', '#FFD591', '#FF7A45', '#CF1D49'])
            .shape('fill')
            .style({
                opacity: 0.8
            });
        scene.addLayer(layer);
        this.scene = scene;
    }

    public render() {
        return (
            <div>
            <div
                id="map"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}
            />
            <canvas id='canvas'></canvas>
            </div>  
        );
    }
}
