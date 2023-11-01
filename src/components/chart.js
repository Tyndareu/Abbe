export const graphicChart = {
  annotations: {},
  chart: {
    animations: {
      enabled: false,
      easing: 'swing'
    },
    background: '#222528',
    foreColor: '#fff',
    fontFamily: 'Roboto',
    height: 250,
    id: 'JjcCT',
    toolbar: {
      show: false
    },
    type: 'bar',
    width: 400
  },
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 10,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      hideZeroBarsWhenGrouped: false,
      isDumbbell: false,
      isFunnel: false,
      isFunnel3d: true,
      dataLabels: {
        total: {
          enabled: false,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#373d3f',
            fontSize: '12px',
            fontWeight: 600
          }
        }
      }
    },
    bubble: {
      zScaling: true
    },
    treemap: {
      dataLabels: {
        format: 'scale'
      }
    },
    radialBar: {
      hollow: {
        background: '#fff'
      },
      dataLabels: {
        name: {},
        value: {},
        total: {}
      }
    },
    pie: {
      donut: {
        labels: {
          name: {},
          value: {},
          total: {}
        }
      }
    }
  },
  dataLabels: {
    style: {
      fontWeight: 700
    },
    background: {
      borderRadius: 0,
      padding: 0,
      borderWidth: 0
    }
  },
  grid: {
    borderColor: '#6e7eaa',
    padding: {
      right: 0,
      left: 15
    }
  },
  legend: {
    show: false,
    floating: true,
    fontSize: 14,
    offsetY: 0,
    markers: {
      shape: 'square',
      size: 8
    },
    itemMargin: {
      vertical: 0
    }
  },
  series: [
    {
      name: 'Column',
      data: [
        {
          x: 'Item 1',
          y: 10
        },
        {
          x: 'Item 2',
          y: 20
        },
        {
          x: 'Item 3',
          y: 30
        },
        {
          x: 'Item 4',
          y: 40
        }
      ]
    }
  ],
  stroke: {
    fill: {
      type: 'solid',
      opacity: 0.85,
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: []
      }
    }
  },
  tooltip: {
    shared: false,
    intersect: true
  },
  xaxis: {
    labels: {
      style: {}
    },
    group: {
      groups: [],
      style: {
        colors: [],
        fontSize: '12px',
        fontWeight: 400,
        cssClass: ''
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tickPlacement: 'between',
    position: 'top',
    title: {
      style: {
        fontWeight: 700
      }
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 5,
    labels: {
      style: {}
    },
    title: {
      style: {
        fontWeight: 700
      }
    }
  },
  theme: {
    mode: 'dark',
    palette: 'palette3'
  },
  _chartInstances: [
    {
      id: 'JjcCT',
      chart: {
        opts: {
          annotations: {
            position: 'front',
            yaxis: [],
            xaxis: [],
            points: []
          },
          chart: {
            type: 'bar',
            background: '',
            foreColor: '#333',
            offsetX: 0,
            offsetY: 0,
            toolbar: {
              show: false
            },
            animations: {
              enabled: false
            },
            dropShadow: {
              enabled: false,
              top: 2,
              left: 2,
              blur: 4,
              color: '#000',
              opacity: 0.35
            },
            fontFamily: 'Roboto',
            height: 250,
            width: 400,
            id: 'JjcCT'
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '70%',
              barHeight: '70%',
              distributed: false,
              borderRadius: 10,
              borderRadiusApplication: 'end',
              borderRadiusWhenStacked: 'last',
              colors: {
                ranges: [],
                backgroundBarColors: [],
                backgroundBarOpacity: 1
              },
              dataLabels: {
                position: 'top'
              }
            },
            heatmap: {
              radius: 2,
              enableShades: true,
              shadeIntensity: 0.5
            },
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              offsetX: 0,
              offsetY: 0,
              hollow: {
                margin: 5,
                size: '50%',
                background: '#fff',
                position: 'front',
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: '#000',
                  opacity: 0.5
                }
              },
              track: {
                show: true,
                background: '#f2f2f2',
                strokeWidth: '97%',
                opacity: 1,
                margin: 5,
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: '#000',
                  opacity: 0.5
                }
              },
              dataLabels: {
                show: true,
                name: {
                  show: true,
                  fontSize: 16,
                  offsetY: 0
                },
                value: {
                  show: true,
                  fontSize: 14,
                  offsetY: 16
                },
                total: {
                  show: false,
                  label: 'Total',
                  fontSize: 16
                }
              }
            },
            pie: {
              startAngle: 0,
              endAngle: 360,
              offsetX: 0,
              offsetY: 0,
              dataLabels: {
                offset: 0
              },
              donut: {
                size: '65%',
                labels: {
                  show: false,
                  name: {
                    show: true,
                    fontSize: 16,
                    offsetY: -10
                  },
                  value: {
                    show: true,
                    fontSize: 20,
                    offsetY: 10
                  },
                  total: {
                    show: false,
                    showAlways: false,
                    label: 'Total',
                    fontSize: 16
                  }
                }
              }
            },
            radar: {
              offsetX: 0,
              offsetY: 0,
              polygons: {
                strokeColors: '#e8e8e8',
                connectorColors: '#e8e8e8',
                fill: {}
              }
            }
          },
          theme: {
            mode: 'light',
            palette: 'palette4'
          },
          dataLabels: {
            enabled: false,
            textAnchor: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: 12,
              fontWeight: 700
            },
            background: {
              enabled: true,
              foreColor: '#fff',
              borderRadius: 2,
              padding: 4,
              opacity: 0.9,
              borderWidth: 1,
              borderColor: '#fff'
            },
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: '#000',
              opacity: 0.45
            }
          },
          markers: {
            size: 0,
            strokeColors: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            shape: 'circle',
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            hover: {}
          },
          xaxis: {
            type: 'category',
            offsetX: 0,
            offsetY: 0,
            position: 'bottom',
            labels: {
              show: true,
              rotate: -45,
              rotateAlways: false,
              trim: true,
              offsetX: 0,
              offsetY: 0,
              style: {
                fontSize: 12,
                fontWeight: 400
              }
            },
            axisBorder: {
              show: true,
              color: '#e0e0e0'
            },
            axisTicks: {
              show: true,
              color: '#e0e0e0'
            },
            title: {
              style: {
                fontSize: 12,
                fontWeight: 700
              }
            },
            crosshairs: {
              show: true,
              width: 1,
              position: 'back',
              opacity: 0.9,
              stroke: {
                color: '#b6b6b6',
                width: 1
              },
              fill: {
                type: 'solid',
                color: '#B1B9C4',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  opacityFrom: 0.4,
                  opacityTo: 0.5
                }
              },
              dropShadow: {
                enabled: false,
                left: 0,
                top: 0,
                blur: 1,
                opacity: 0.4
              }
            },
            convertedCatToNumeric: false
          },
          yaxis: [
            {
              show: true,
              showAlways: false,
              showForNullSeries: true,
              opposite: false,
              reversed: false,
              logarithmic: false,
              logBase: 10,
              tickAmount: 5,
              forceNiceScale: false,
              floating: false,
              labels: {
                show: true,
                minWidth: 0,
                maxWidth: 160,
                offsetX: 0,
                offsetY: 0,
                rotate: 0,
                padding: 20,
                style: {
                  fontSize: 11,
                  fontWeight: 400,
                  cssClass: ''
                }
              },
              axisBorder: {
                show: false,
                color: '#e0e0e0',
                width: 1,
                offsetX: 0,
                offsetY: 0
              },
              axisTicks: {
                show: false,
                color: '#e0e0e0',
                width: 6,
                offsetX: 0,
                offsetY: 0
              },
              title: {
                rotate: -90,
                offsetY: 0,
                offsetX: 0,
                style: {
                  fontSize: 11,
                  fontWeight: 700,
                  cssClass: ''
                }
              },
              tooltip: {
                enabled: false,
                offsetX: 0
              },
              crosshairs: {
                show: true,
                position: 'front',
                stroke: {
                  color: '#b6b6b6',
                  width: 1,
                  dashArray: 0
                }
              }
            }
          ],
          grid: {
            show: true,
            borderColor: '#e0e0e0',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
            row: {
              opacity: 0.5
            },
            column: {
              opacity: 0.5
            },
            padding: {
              top: 0,
              right: 25,
              bottom: 0,
              left: 15
            }
          },
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            width: 2,
            dashArray: 0
          },
          fill: {
            type: 'solid',
            opacity: 0.85,
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: []
            },
            pattern: {
              style: 'squares',
              width: 6,
              height: 6,
              strokeWidth: 2
            }
          },
          legend: {
            show: true,
            showForSingleSeries: false,
            floating: false,
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: 14,
            fontWeight: 400,
            offsetX: -20,
            offsetY: 0,
            labels: {
              useSeriesColors: false
            },
            markers: {
              width: 12,
              height: 12,
              strokeWidth: 0,
              strokeColor: '#fff',
              radius: 12
            },
            itemMargin: {
              horizontal: 5,
              vertical: 0
            },
            onItemClick: {
              toggleDataSeries: true
            },
            onItemHover: {
              highlightDataSeries: true
            }
          }
        },
        w: {
          globals: {
            chartID: 'JjcCT',
            cuid: 'g4roi4sui',
            events: {
              beforeMount: [],
              mounted: [],
              updated: [],
              clicked: [],
              selection: [],
              dataPointSelection: [],
              zoomed: [],
              scrolled: []
            },
            colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B'],
            clientX: null,
            clientY: null,
            fill: {
              colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B']
            },
            stroke: {},
            dataLabels: {
              style: {}
            },
            radarPolygons: {
              fill: {
                colors: ['#424242', '#424242', '#424242', '#424242']
              }
            },
            markers: {
              size: [0, 0],
              largestSize: 0
            },
            animationEnded: true,
            isDirty: true,
            isExecCalled: false,
            initialConfig: {
              fill: {
                type: 'solid',
                opacity: 0.85,
                gradient: {
                  shade: 'dark',
                  type: 'horizontal',
                  shadeIntensity: 0.5,
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1
                },
                image: {
                  src: []
                },
                pattern: {
                  style: 'squares',
                  width: 6,
                  height: 6,
                  strokeWidth: 2
                }
              },
              forecastDataPoints: {
                count: 0,
                fillOpacity: 0.5,
                dashArray: 4
              },
              labels: [],
              markers: {
                discrete: [],
                size: 0,
                strokeColors: '#fff',
                strokeWidth: 2,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                shape: 'circle',
                width: 8,
                height: 8,
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                showNullDataPoints: true,
                hover: {
                  sizeOffset: 3
                }
              },
              noData: {
                align: 'center',
                verticalAlign: 'middle',
                offsetX: 0,
                offsetY: 0,
                style: {
                  fontSize: '14px'
                }
              },
              responsive: [],
              states: {
                normal: {
                  filter: {
                    type: 'none',
                    value: 0
                  }
                },
                hover: {
                  filter: {
                    type: 'lighten',
                    value: 0.1
                  }
                },
                active: {
                  allowMultipleDataPointsSelection: false,
                  filter: {
                    type: 'darken',
                    value: 0.5
                  }
                }
              },
              title: {
                align: 'left',
                margin: 5,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize: '14px',
                  fontWeight: 900
                }
              },
              subtitle: {
                align: 'left',
                margin: 5,
                offsetX: 0,
                offsetY: 30,
                floating: false,
                style: {
                  fontSize: '12px',
                  fontWeight: 400
                }
              },
              yaxis: [null]
            },
            initialSeries: [
              {
                name: 'Column',
                data: [
                  {
                    x: 'Item 1',
                    y: 10
                  },
                  {
                    x: 'Item 2',
                    y: 20
                  },
                  {
                    x: 'Item 3',
                    y: 30
                  },
                  {
                    x: 'Item 4',
                    y: 40
                  }
                ]
              }
            ],
            lastXAxis: [],
            lastYAxis: [],
            columnSeries: null,
            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
            timescaleLabels: [],
            noLabelsProvided: false,
            allSeriesCollapsed: false,
            collapsedSeries: [],
            collapsedSeriesIndices: [],
            ancillaryCollapsedSeries: [],
            ancillaryCollapsedSeriesIndices: [],
            risingSeries: [],
            dataFormatXNumeric: false,
            capturedSeriesIndex: -1,
            capturedDataPointIndex: -1,
            selectedDataPoints: [],
            goldenPadding: 35,
            invalidLogScale: false,
            ignoreYAxisIndexes: [],
            yAxisSameScaleIndices: [],
            maxValsInArrayIndex: 0,
            radialSize: 82.63453613374293,
            zoomEnabled: true,
            panEnabled: false,
            selectionEnabled: false,
            yaxis: null,
            mousedown: false,
            lastClientPosition: {},
            yValueDecimal: 0,
            total: 0,
            SVGNS: 'http://www.w3.org/2000/svg',
            svgWidth: 400,
            svgHeight: 250,
            noData: false,
            locale: {
              months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
              ],
              shortMonths: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
              ],
              days: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
              ],
              shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              toolbar: {
                exportToSVG: 'Download SVG',
                exportToPNG: 'Download PNG',
                exportToCSV: 'Download CSV',
                menu: 'Menu',
                selection: 'Selection',
                selectionZoom: 'Selection Zoom',
                zoomIn: 'Zoom In',
                zoomOut: 'Zoom Out',
                pan: 'Panning',
                reset: 'Reset Zoom'
              }
            },
            dom: {
              baseEl: {
                _prevClass: 'JjcCT',
                _SBA4B_eventListenerList: {
                  click: [
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    }
                  ],
                  mousedown: [
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    }
                  ],
                  mousemove: [
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    }
                  ],
                  mouseleave: [
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    }
                  ],
                  touchstart: [
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    }
                  ],
                  touchmove: [
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    }
                  ],
                  touchleave: [
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    }
                  ],
                  mouseup: [
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    }
                  ],
                  touchend: [
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    },
                    {
                      useCapture: {
                        passive: true
                      }
                    }
                  ]
                }
              },
              elWrap: {
                _SBA4B_eventListenerList: {
                  click: [
                    {
                      useCapture: {
                        capture: false,
                        passive: true
                      }
                    }
                  ],
                  mousedown: [
                    {
                      useCapture: {
                        capture: false,
                        passive: true
                      }
                    }
                  ],
                  mousemove: [
                    {
                      useCapture: {
                        capture: false,
                        passive: true
                      }
                    }
                  ],
                  mouseleave: [
                    {
                      useCapture: {
                        capture: false,
                        passive: true
                      }
                    }
                  ],
                  touchstart: [
                    {
                      useCapture: {
                        capture: false,
                        passive: true
                      }
                    }
                  ],
                  touchmove: [
                    {
                      useCapture: {
                        capture: false,
                        passive: true
                      }
                    }
                  ],
                  touchleave: [
                    {
                      useCapture: {
                        capture: false,
                        passive: true
                      }
                    }
                  ],
                  mouseup: [
                    {
                      useCapture: {
                        capture: false,
                        passive: true
                      }
                    }
                  ],
                  touchend: [
                    {
                      useCapture: {
                        capture: false,
                        passive: true
                      }
                    }
                  ]
                }
              },
              Paper: {
                _stroke: '#000000',
                _event: null,
                dom: {},
                node: {},
                type: 'svg',
                _defs: {
                  _stroke: '#000000',
                  _event: null,
                  dom: {},
                  node: {},
                  type: 'defs'
                }
              },
              elLegendForeign: {
                instance: {
                  _stroke: '#000000',
                  _event: null,
                  dom: {},
                  type: 'foreignObject'
                }
              },
              elLegendWrap: {},
              elGraphical: {
                _stroke: '#000000',
                _event: null,
                dom: {},
                node: {},
                type: 'g'
              },
              elGridRectMask: {},
              elGridRectMarkerMask: {},
              elForecastMask: {},
              elNonForecastMask: {},
              elGridRect: {
                _stroke: 'none',
                _event: null,
                dom: {},
                node: {},
                type: 'rect'
              },
              elGridRectMarker: {
                _stroke: 'none',
                _event: null,
                dom: {},
                node: {},
                type: 'rect'
              }
            },
            memory: {
              methodsToExec: []
            },
            shouldAnimate: true,
            skipLastTimelinelabel: false,
            skipFirstTimelinelabel: false,
            delayedElements: [
              {
                el: {
                  instance: {
                    _stroke: '#000000',
                    _event: null,
                    dom: {},
                    type: 'g'
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: '#000000',
                    _event: null,
                    dom: {},
                    type: 'g'
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: '#000000',
                    _event: null,
                    dom: {},
                    type: 'g'
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: '#000000',
                    _event: null,
                    dom: {},
                    type: 'g'
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: '#000000',
                    _event: null,
                    dom: {},
                    type: 'g'
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: '#000000',
                    _event: null,
                    dom: {},
                    type: 'g'
                  }
                }
              },
              {
                el: {
                  instance: {
                    _stroke: '#000000',
                    _event: null,
                    dom: {},
                    type: 'g'
                  }
                },
                index: 0
              },
              {
                el: {
                  instance: {
                    _stroke: '#000000',
                    _event: null,
                    dom: {},
                    type: 'g'
                  }
                },
                index: 0
              },
              {
                el: {
                  instance: {
                    _stroke: '#000000',
                    _event: null,
                    dom: {},
                    type: 'g'
                  }
                },
                index: 0
              }
            ],
            axisCharts: true,
            isDataXYZ: false,
            resized: true,
            resizeTimer: null,
            comboCharts: false,
            dataChanged: true,
            previousPaths: [
              {
                type: 'bar',
                paths: [
                  {
                    d: 'M 13.403371560573579 181.70179907417298 L 13.403371560573579 146.27659930562973 C 13.403371560573579 141.27659930562973 18.40337156057358 136.27659930562973 23.40337156057358 136.27659930562973 L 63.95243884325028 136.27659930562973 C 68.95243884325028 136.27659930562973 73.95243884325028 141.27659930562973 73.95243884325028 146.27659930562973 L 73.95243884325028 181.70179907417298 z '
                  },
                  {
                    d: 'M 102.75918196439743 181.70179907417298 L 102.75918196439743 100.8513995370865 C 102.75918196439743 95.8513995370865 107.75918196439743 90.8513995370865 112.75918196439743 90.8513995370865 L 153.30824924707412 90.8513995370865 C 158.30824924707412 90.8513995370865 163.30824924707412 95.8513995370865 163.30824924707412 100.8513995370865 L 163.30824924707412 181.70179907417298 z '
                  },
                  {
                    d: 'M 192.1149923682213 181.70179907417298 L 192.1149923682213 55.42619976854325 C 192.1149923682213 50.42619976854325 197.1149923682213 45.42619976854325 202.1149923682213 45.42619976854325 L 242.664059650898 45.42619976854325 C 247.664059650898 45.42619976854325 252.664059650898 50.42619976854325 252.664059650898 55.42619976854325 L 252.664059650898 181.70179907417298 z '
                  },
                  {
                    d: 'M 281.47080277204515 181.70179907417298 L 281.47080277204515 10.001 C 281.47080277204515 5.0009999999999994 286.47080277204515 0.001 291.47080277204515 0.001 L 332.0198700547218 0.001 C 337.0198700547218 0.001 342.0198700547218 5.001 342.0198700547218 10.001 L 342.0198700547218 181.70179907417298 z '
                  }
                ],
                realIndex: '0'
              }
            ],
            allSeriesHasEqualX: true,
            pointsArray: [],
            dataLabelsRects: [
              [
                {
                  x: 43.677905201911926,
                  y: 150.67559987783432,
                  width: 13.487500190734863,
                  height: 14.40000057220459
                },
                {
                  x: 133.03371560573578,
                  y: 105.25040010929108,
                  width: 13.487500190734863,
                  height: 14.40000057220459
                },
                {
                  x: 222.38952600955963,
                  y: 59.82520034074784,
                  width: 13.487500190734863,
                  height: 14.40000057220459
                },
                {
                  x: 311.7453364133835,
                  y: 14.40000057220459,
                  width: 13.487500190734863,
                  height: 14.40000057220459
                }
              ]
            ],
            lastDrawnDataLabelsIndexes: [
              [
                0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0,
                1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1,
                2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3
              ]
            ],
            hasNullValues: false,
            zoomed: false,
            gridWidth: 357.4232416152954,
            gridHeight: 181.70079907417298,
            rotateXLabels: false,
            defaultLabels: false,
            yLabelFormatters: [null],
            LINE_HEIGHT_RATIO: 1.618,
            xAxisLabelsHeight: 33.29920092582702,
            xAxisGroupLabelsHeight: 18.899200353622433,
            xAxisLabelsWidth: 34.22929763793945,
            yAxisLabelsWidth: 0,
            scaleX: 1,
            scaleY: 1,
            translateX: 42.57675838470459,
            translateY: 42.29920092582702,
            translateYAxisX: [9.57675838470459],
            yAxisWidths: [],
            translateXAxisY: -4,
            translateXAxisX: 0,
            tooltip: {
              tooltipUtil: {},
              tooltipLabels: {
                tooltipUtil: {}
              },
              tooltipPosition: {},
              marker: {
                tooltipPosition: {}
              },
              intersect: {
                isVerticalGroupedRangeBar: false
              },
              axesTooltip: {},
              showOnIntersect: true,
              showTooltipTitle: true,
              fixedTooltip: false,
              xaxisTooltip: null,
              yaxisTTEls: null,
              isBarShared: false,
              lastHoverTime: 1698841904594,
              xyRatios: {
                yRatio: [0.22014212487679485],
                invertedYRatio: 0.11191214040594795,
                zRatio: null,
                xRatio: null,
                initialXRatio: null,
                invertedXRatio: null,
                baseLineInvertedY: 0.1,
                baseLineY: [0],
                baseLineX: 0
              },
              isXAxisTooltipEnabled: false,
              yaxisTooltips: [false],
              allTooltipSeriesGroups: [],
              xaxisOffY: -36.29920092582702,
              yaxisOffX: 1,
              yaxisTooltip: {},
              yaxisTooltipText: [{}],
              xcrosshairsWidth: 1,
              ycrosshairs: {
                instance: {
                  _stroke: '#b6b6b6',
                  _event: null,
                  dom: {},
                  type: 'line'
                }
              },
              ycrosshairsHidden: {
                instance: {
                  _stroke: '#b6b6b6',
                  _event: null,
                  dom: {},
                  type: 'line'
                }
              },
              xAxisTicksPositions: [
                89.35581040382385, 178.7116208076477, 268.06743121147156,
                357.4232416152954
              ],
              dataPointsDividedHeight: 45.425199768543244,
              dataPointsDividedWidth: 89.35581040382385,
              tooltipTitle: {},
              legendLabels: {},
              ttItems: [{}],
              seriesBound: {
                x: 1094.1767578125,
                y: 294.8992004394531,
                width: 357.4232482910156,
                height: 180.7008056640625,
                top: 294.8992004394531,
                right: 1451.6000061035156,
                bottom: 475.6000061035156,
                left: 1094.1767578125
              }
            },
            series: [[10, 20, 30, 40]],
            seriesCandleO: [],
            seriesCandleH: [],
            seriesCandleM: [],
            seriesCandleL: [],
            seriesCandleC: [],
            seriesRangeStart: [],
            seriesRangeEnd: [],
            seriesRange: [],
            seriesPercent: [[100, 100, 100, 100]],
            seriesGoals: [[null, null, null, null]],
            seriesX: [null],
            seriesZ: [[]],
            seriesNames: ['Column'],
            seriesTotals: [100],
            seriesLog: [null],
            seriesColors: [null],
            stackedSeriesTotals: [10, 20, 30, 40],
            seriesXvalues: [
              [
                44.677905201911926, 223.38952600955963, 312.7453364133835,
                402.10114681720734
              ]
            ],
            seriesYvalues: [
              [136.27559930562973, 90.85039953708649, 45.42519976854325, 0]
            ],
            hasXaxisGroups: false,
            groups: [],
            seriesGroups: [],
            categoryLabels: [],
            selectionResizeTimer: null,
            isXNumeric: false,
            isMultiLineX: false,
            isMultipleYAxis: false,
            maxY: 40,
            minY: 0,
            minYArr: [0],
            maxYArr: [40],
            maxX: -1.7976931348623157e308,
            minX: 1.7976931348623157e308,
            initialMaxX: -1.7976931348623157e308,
            initialMinX: 1.7976931348623157e308,
            maxDate: 0,
            minDate: 1.7976931348623157e308,
            minZ: 1.7976931348623157e308,
            maxZ: -1.7976931348623157e308,
            minXDiff: 1.7976931348623157e308,
            yAxisScale: [
              {
                result: [0, 10, 20, 30, 40],
                niceMin: 0,
                niceMax: 40
              }
            ],
            xAxisScale: null,
            xAxisTicksPositions: [],
            yLabelsCoords: [
              {
                width: 22.57675838470459,
                index: 0
              }
            ],
            yTitleCoords: [
              {
                width: 0,
                index: 0
              }
            ],
            barPadForNumericAxis: 0,
            padHorizontal: 0,
            xRange: null,
            yRange: [40],
            zRange: null,
            dataPoints: 4,
            xTickAmount: 0,
            xyCharts: true,
            isBarHorizontal: false,
            chartClass: '.apexchartsJjcCT',
            comboBarCount: 0,
            isRangeBar: false,
            xAxisHeight: 33.29920092582702,
            yLogRatio: [0.22014212487679485],
            logYRange: [null]
          }
        },
        publicMethods: [
          'updateOptions',
          'updateSeries',
          'appendData',
          'appendSeries',
          'isSeriesHidden',
          'toggleSeries',
          'showSeries',
          'hideSeries',
          'setLocale',
          'resetSeries',
          'zoomX',
          'toggleDataPointSelection',
          'dataURI',
          'exportToCSV',
          'addXaxisAnnotation',
          'addYaxisAnnotation',
          'addPointAnnotation',
          'clearAnnotations',
          'removeAnnotation',
          'paper',
          'destroy'
        ],
        eventList: [
          'click',
          'mousedown',
          'mousemove',
          'mouseleave',
          'touchstart',
          'touchmove',
          'touchleave',
          'mouseup',
          'touchend'
        ],
        animations: {},
        axes: {},
        core: {},
        config: {
          opts: {}
        },
        data: {
          coreUtils: {},
          fallbackToCategory: true,
          activeSeriesIndex: 0
        },
        grid: {
          xaxisLabels: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
          axesUtils: {},
          isRangeBar: 0,
          elg: {
            _stroke: '#000000',
            _event: null,
            dom: {},
            node: {},
            type: 'g'
          },
          elgridLinesH: {
            _stroke: '#000000',
            _event: null,
            dom: {},
            node: {},
            type: 'g'
          },
          elgridLinesV: {
            _stroke: '#000000',
            _event: null,
            dom: {},
            node: {},
            type: 'g'
          },
          elGridBorders: {
            _stroke: '#000000',
            _event: null,
            dom: {},
            node: {},
            type: 'g'
          }
        },
        graphics: {},
        coreUtils: {},
        crosshairs: {},
        events: {},
        exports: {},
        localization: {},
        options: {
          yAxis: {
            show: true,
            showAlways: false,
            showForNullSeries: true,
            opposite: false,
            reversed: false,
            logarithmic: false,
            logBase: 10,
            forceNiceScale: false,
            floating: false,
            labels: {
              show: true,
              minWidth: 0,
              maxWidth: 160,
              offsetX: 0,
              offsetY: 0,
              rotate: 0,
              padding: 20,
              style: {
                colors: [],
                fontSize: '11px',
                fontWeight: 400,
                cssClass: ''
              }
            },
            axisBorder: {
              show: false,
              color: '#e0e0e0',
              width: 1,
              offsetX: 0,
              offsetY: 0
            },
            axisTicks: {
              show: false,
              color: '#e0e0e0',
              width: 6,
              offsetX: 0,
              offsetY: 0
            },
            title: {
              rotate: -90,
              offsetY: 0,
              offsetX: 0,
              style: {
                fontSize: '11px',
                fontWeight: 900,
                cssClass: ''
              }
            },
            tooltip: {
              enabled: false,
              offsetX: 0
            },
            crosshairs: {
              show: true,
              position: 'front',
              stroke: {
                color: '#b6b6b6',
                width: 1,
                dashArray: 0
              }
            }
          },
          pointAnnotation: {
            x: 0,
            y: null,
            yAxisIndex: 0,
            seriesIndex: 0,
            marker: {
              size: 4,
              fillColor: '#fff',
              strokeWidth: 2,
              strokeColor: '#333',
              shape: 'circle',
              offsetX: 0,
              offsetY: 0,
              radius: 2,
              cssClass: ''
            },
            label: {
              borderColor: '#c2c2c2',
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: 'middle',
              offsetX: 0,
              offsetY: 0,
              style: {
                background: '#fff',
                fontSize: '11px',
                fontWeight: 400,
                cssClass: '',
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            },
            customSVG: {
              offsetX: 0,
              offsetY: 0
            },
            image: {
              width: 20,
              height: 20,
              offsetX: 0,
              offsetY: 0
            }
          },
          yAxisAnnotation: {
            y: 0,
            y2: null,
            strokeDashArray: 1,
            fillColor: '#c2c2c2',
            borderColor: '#c2c2c2',
            borderWidth: 1,
            opacity: 0.3,
            offsetX: 0,
            offsetY: 0,
            width: '100%',
            yAxisIndex: 0,
            label: {
              borderColor: '#c2c2c2',
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: 'end',
              position: 'right',
              offsetX: 0,
              offsetY: -3,
              style: {
                background: '#fff',
                fontSize: '11px',
                fontWeight: 400,
                cssClass: '',
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            }
          },
          xAxisAnnotation: {
            x: 0,
            x2: null,
            strokeDashArray: 1,
            fillColor: '#c2c2c2',
            borderColor: '#c2c2c2',
            borderWidth: 1,
            opacity: 0.3,
            offsetX: 0,
            offsetY: 0,
            label: {
              borderColor: '#c2c2c2',
              borderWidth: 1,
              borderRadius: 2,
              textAnchor: 'middle',
              orientation: 'vertical',
              position: 'top',
              offsetX: 0,
              offsetY: 0,
              style: {
                background: '#fff',
                fontSize: '11px',
                fontWeight: 400,
                cssClass: '',
                padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 2
                }
              }
            }
          },
          text: {
            x: 0,
            y: 0,
            text: '',
            textAnchor: 'start',
            fontSize: '13px',
            fontWeight: 400,
            appendTo: '.apexcharts-annotations',
            backgroundColor: 'transparent',
            borderColor: '#c2c2c2',
            borderRadius: 0,
            borderWidth: 0,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2
          }
        },
        responsive: {},
        series: {
          legendInactiveClass: 'legend-mouseover-inactive'
        },
        theme: {
          isColorFn: false,
          isHeatmapDistributed: false,
          isBarDistributed: true
        },
        formatters: {
          tooltipKeyFormat: 'dd MMM'
        },
        titleSubtitle: {},
        legend: {
          isBarsDistributed: true,
          legendHelpers: {}
        },
        toolbar: {
          ev: {},
          selectedClass: 'apexcharts-selected',
          minX: 1.7976931348623157e308,
          maxX: -1.7976931348623157e308
        },
        tooltip: {
          tooltipUtil: {},
          tooltipLabels: {
            tooltipUtil: {}
          },
          tooltipPosition: {},
          marker: {
            tooltipPosition: {}
          },
          intersect: {
            isVerticalGroupedRangeBar: false
          },
          axesTooltip: {},
          showOnIntersect: true,
          showTooltipTitle: true,
          fixedTooltip: false,
          xaxisTooltip: null,
          yaxisTTEls: null,
          isBarShared: false,
          lastHoverTime: 1698841904594
        },
        dimensions: {
          lgRect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
          },
          yAxisWidth: 27.57675838470459,
          yAxisWidthLeft: 27.57675838470459,
          yAxisWidthRight: 0,
          xAxisHeight: 33.29920092582702,
          isSparkline: false,
          dimHelpers: {},
          dimYAxis: {},
          dimXAxis: {},
          dimGrid: {},
          lgWidthForSideLegends: 0,
          xPadRight: 0,
          xPadLeft: 0,
          xAxisWidth: 34.22929763793945
        },
        updateHelpers: {},
        zoomPanSelection: {
          selectedClass: 'apexcharts-selected',
          minX: 1.7976931348623157e308,
          maxX: -1.7976931348623157e308,
          dragged: false,
          graphics: {},
          eventList: [
            'mousedown',
            'mouseleave',
            'mousemove',
            'touchstart',
            'touchmove',
            'mouseup',
            'touchend'
          ],
          clientX: 0,
          clientY: 0,
          startX: 0,
          endX: 0,
          dragX: 0,
          startY: 0,
          endY: 0,
          dragY: 0,
          moveDirection: 'none'
        },
        pie: {
          chartType: 'bar',
          initialAnim: false,
          dynamicAnim: false,
          animBeginArr: [0],
          animDur: 0,
          defaultSize: 181.70079907417298,
          centerY: 90.85039953708649,
          centerX: 178.7116208076477,
          fullAngle: 360,
          initialAngle: 0,
          donutSize: 53.7124484869329,
          maxY: 0,
          sliceLabels: [],
          sliceSizes: [],
          prevSectorAngleArr: []
        },
        rangeBar: {
          isHorizontal: false,
          strokeWidth: 2,
          isNullValue: false,
          isRangeBar: 0,
          isVerticalGroupedRangeBar: 0,
          isFunnel: false,
          xRatio: null,
          initialXRatio: null,
          invertedXRatio: null,
          invertedYRatio: 0.11191214040594795,
          baseLineInvertedY: 0.1,
          yaxisIndex: 0,
          seriesLen: 0,
          pathArr: [],
          lastActiveBarSerieIndex: 0,
          stackedSeriesTotals: [10, 20, 30, 40],
          barHelpers: {}
        },
        bar: {
          isHorizontal: false,
          strokeWidth: 2,
          isNullValue: false,
          isRangeBar: 0,
          isVerticalGroupedRangeBar: 0,
          isFunnel: false,
          xRatio: null,
          initialXRatio: null,
          invertedXRatio: null,
          invertedYRatio: 0.11191214040594795,
          baseLineInvertedY: 0.1,
          yaxisIndex: 0,
          seriesLen: 1,
          pathArr: [
            {
              pathTo:
                'M 13.403371560573579 181.70179907417298 L 13.403371560573579 146.27659930562973 C 13.403371560573579 141.27659930562973 18.40337156057358 136.27659930562973 23.40337156057358 136.27659930562973 L 63.95243884325028 136.27659930562973 C 68.95243884325028 136.27659930562973 73.95243884325028 141.27659930562973 73.95243884325028 146.27659930562973 L 73.95243884325028 181.70179907417298 z ',
              pathFrom:
                'M 13.403371560573579 181.70179907417298 L 13.403371560573579 146.27659930562973 C 13.403371560573579 141.27659930562973 18.40337156057358 136.27659930562973 23.40337156057358 136.27659930562973 L 63.95243884325028 136.27659930562973 C 68.95243884325028 136.27659930562973 73.95243884325028 141.27659930562973 73.95243884325028 146.27659930562973 L 73.95243884325028 181.70179907417298 z  L 13.403371560573579 181.70179907417298 L 73.95243884325028 181.70179907417298 L 73.95243884325028 181.70179907417298 L 73.95243884325028 181.70179907417298 L 73.95243884325028 181.70179907417298 L 73.95243884325028 181.70179907417298 L 13.403371560573579 181.70179907417298 z',
              x: 102.75918196439743,
              y: 136.27559930562973,
              goalY: [],
              barXPosition: 13.403371560573579,
              barWidth: 62.549067282676695
            },
            {
              pathTo:
                'M 102.75918196439743 181.70179907417298 L 102.75918196439743 100.8513995370865 C 102.75918196439743 95.8513995370865 107.75918196439743 90.8513995370865 112.75918196439743 90.8513995370865 L 153.30824924707412 90.8513995370865 C 158.30824924707412 90.8513995370865 163.30824924707412 95.8513995370865 163.30824924707412 100.8513995370865 L 163.30824924707412 181.70179907417298 z ',
              pathFrom:
                'M 102.75918196439743 181.70179907417298 L 102.75918196439743 100.8513995370865 C 102.75918196439743 95.8513995370865 107.75918196439743 90.8513995370865 112.75918196439743 90.8513995370865 L 153.30824924707412 90.8513995370865 C 158.30824924707412 90.8513995370865 163.30824924707412 95.8513995370865 163.30824924707412 100.8513995370865 L 163.30824924707412 181.70179907417298 z  L 102.75918196439743 181.70179907417298 L 163.30824924707412 181.70179907417298 L 163.30824924707412 181.70179907417298 L 163.30824924707412 181.70179907417298 L 163.30824924707412 181.70179907417298 L 163.30824924707412 181.70179907417298 L 102.75918196439743 181.70179907417298 z',
              x: 192.1149923682213,
              y: 90.85039953708649,
              goalY: [],
              barXPosition: 102.75918196439743,
              barWidth: 62.549067282676695
            },
            {
              pathTo:
                'M 192.1149923682213 181.70179907417298 L 192.1149923682213 55.42619976854325 C 192.1149923682213 50.42619976854325 197.1149923682213 45.42619976854325 202.1149923682213 45.42619976854325 L 242.664059650898 45.42619976854325 C 247.664059650898 45.42619976854325 252.664059650898 50.42619976854325 252.664059650898 55.42619976854325 L 252.664059650898 181.70179907417298 z ',
              pathFrom:
                'M 192.1149923682213 181.70179907417298 L 192.1149923682213 55.42619976854325 C 192.1149923682213 50.42619976854325 197.1149923682213 45.42619976854325 202.1149923682213 45.42619976854325 L 242.664059650898 45.42619976854325 C 247.664059650898 45.42619976854325 252.664059650898 50.42619976854325 252.664059650898 55.42619976854325 L 252.664059650898 181.70179907417298 z  L 192.1149923682213 181.70179907417298 L 252.664059650898 181.70179907417298 L 252.664059650898 181.70179907417298 L 252.664059650898 181.70179907417298 L 252.664059650898 181.70179907417298 L 252.664059650898 181.70179907417298 L 192.1149923682213 181.70179907417298 z',
              x: 281.47080277204515,
              y: 45.42519976854325,
              goalY: [],
              barXPosition: 192.1149923682213,
              barWidth: 62.549067282676695
            },
            {
              pathTo:
                'M 281.47080277204515 181.70179907417298 L 281.47080277204515 10.001 C 281.47080277204515 5.0009999999999994 286.47080277204515 0.001 291.47080277204515 0.001 L 332.0198700547218 0.001 C 337.0198700547218 0.001 342.0198700547218 5.001 342.0198700547218 10.001 L 342.0198700547218 181.70179907417298 z ',
              pathFrom:
                'M 281.47080277204515 181.70179907417298 L 281.47080277204515 10.001 C 281.47080277204515 5.0009999999999994 286.47080277204515 0.001 291.47080277204515 0.001 L 332.0198700547218 0.001 C 337.0198700547218 0.001 342.0198700547218 5.001 342.0198700547218 10.001 L 342.0198700547218 181.70179907417298 z  L 281.47080277204515 181.70179907417298 L 342.0198700547218 181.70179907417298 L 342.0198700547218 181.70179907417298 L 342.0198700547218 181.70179907417298 L 342.0198700547218 181.70179907417298 L 342.0198700547218 181.70179907417298 L 281.47080277204515 181.70179907417298 z',
              x: 370.826613175869,
              y: 0,
              goalY: [],
              barXPosition: 281.47080277204515,
              barWidth: 62.549067282676695
            }
          ],
          lastActiveBarSerieIndex: 0,
          stackedSeriesTotals: [10, 20, 30, 40],
          barHelpers: {},
          totalItems: 4,
          visibleI: 0,
          visibleItems: 4,
          zeroSerieses: [],
          isReversed: false
        },
        annotations: {
          graphics: {},
          helpers: {},
          xAxisAnnotations: {
            helpers: {}
          },
          yAxisAnnotations: {
            helpers: {}
          },
          pointsAnnotations: {
            helpers: {}
          },
          xDivision: 89.35581040382385
        }
      }
    }
  ]
}
