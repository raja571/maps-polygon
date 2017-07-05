angular.module('appMaps', ['uiGmapgoogle-maps'])
    .controller('mainCtrl', function ($scope) {
        $scope.map = { center: { latitude: -37.890716, longitude: 145.039512 }, zoom: 15, bounds: {} };
        $scope.marker = {
            id: 0,
            coords: {
                latitude: -37.892004,
                longitude: 145.039589
            }
        }
        $scope.polygons = [
            {
                id: 2,
                path: [
                    {
                        latitude: -37.896736,
                        longitude: 145.035703
                    },
                    {
                        latitude: -37.895991,
                        longitude: 145.040252
                    },
                    {
                        latitude: -37.891801,
                        longitude: 145.040619
                    },
                    {
                        latitude: -37.890852,
                        longitude: 145.043923
                    },
                    {
                        latitude: -37.888177,
                        longitude: 145.041520
                    },
                    {
                        latitude: -37.886822,
                        longitude: 145.037915
                    },
                    {
                        latitude: -37.890378,
                        longitude: 145.036584
                    },
                    {
                        latitude: -37.893257,
                        longitude: 145.036499
                    }
                ],
                marker: {
                        latitude: -37.892004,
                        longitude: 145.039589
                    
                },
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                editable: true,
                draggable: true,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#ff0000',
                    opacity: 0.3
                }
            },
            {
                id:3,
            path: [
                    {
                        latitude: -37.892783,
                        longitude: 145.051648
                    },
                    {
                        latitude: -37.889769,
                        longitude: 145.050789
                    },
                    {
                        latitude: -37.887466,
                        longitude: 145.053021
                    },
                    {
                        latitude: -37.889159,
                        longitude: 145.052721
                    },
                    {
                        latitude: -37.890852,
                        longitude: 145.054738
                    }

            ],
            marker: {
                latitude: -37.890868,
                longitude: 145.051928

            },
        stroke: {
            color: '#6060FB',
            weight: 3
        },
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
            color: '#6060FB',
            opacity: 0.3
        }
    }
        ];
    });