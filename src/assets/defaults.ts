import { type MiniWidgetProfile, MiniWidgetType } from '@/types/miniWidgets'
import { type Profile, WidgetType } from '@/types/widgets'

const defaultWidgetManagerVars = {
  timesMounted: 0,
  configMenuOpen: false,
  allowMoving: false,
  lastNonMaximizedX: 0.4,
  lastNonMaximizedY: 0.32,
  lastNonMaximizedWidth: 0.2,
  lastNonMaximizedHeight: 0.36,
}

const defaultMiniWidgetManagerVars = {
  timesMounted: 0,
  configMenuOpen: false,
}

export const defaultGlobalAddress = window.location.hostname
export const widgetProfiles: Profile[] = [
  {
    name: 'ROV default',
    hash: 'c2bcf04d-048f-496f-9d78-fc4002608028',
    views: [
      {
        hash: 'eddd8e53-88c3-46a9-9e50-909227661f38',
        name: 'Video View',
        showBottomBarOnBoot: true,
        widgets: [
          {
            hash: '80e785e1-31e2-4bfe-85d4-99fee6ca3f76',
            name: 'VirtualHorizon',
            component: WidgetType.VirtualHorizon,
            position: {
              x: 0.933,
              y: 0.054,
            },
            size: {
              width: 0.062,
              height: 0.118,
            },
            options: {},
            managerVars: defaultWidgetManagerVars,
          },
          {
            hash: '0a786865-0eff-408c-bc1d-a2b710222418',
            name: 'Compass',
            component: WidgetType.Compass,
            position: {
              x: 0.863,
              y: 0.054,
            },
            size: {
              width: 0.0614,
              height: 0.116,
            },
            options: {
              headingStyle: 'North Up',
            },
            managerVars: defaultWidgetManagerVars,
          },
          {
            hash: '6439e791-3031-4928-aff2-8bd9af713798',
            name: 'Video player',
            component: WidgetType.VideoPlayer,
            position: {
              x: 0,
              y: 0,
            },
            size: {
              width: 1,
              height: 1,
            },
            managerVars: defaultWidgetManagerVars,
            options: {
              videoFitStyle: 'cover',
              flipHorizontally: false,
              flipVertically: false,
            },
          },
        ],
        miniWidgetContainers: [
          {
            name: 'Bottom-left container',
            widgets: [
              {
                hash: '59517f70-4221-491a-8f10-c877c05c22b5',
                component: MiniWidgetType.ViewSelector,
                managerVars: defaultMiniWidgetManagerVars,
                options: {},
              },
              {
                component: MiniWidgetType.VeryGenericIndicator,
                options: {
                  displayName: 'Pilot Gain',
                  variableName: 'PilotGain',
                  iconName: 'mdi-account-hard-hat',
                  variableUnit: '%',
                  variableMultiplier: 100,
                },
                hash: '2f720389-4037-4523-9b98-249cf9640289',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.VeryGenericIndicator,
                options: {
                  displayName: 'Lights (1)',
                  variableName: 'Lights1',
                  iconName: 'mdi-flashlight',
                  variableUnit: '%',
                  variableMultiplier: 100,
                },
                hash: 'e43916ab-7f41-4c41-810d-96b5f651c6da',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.VeryGenericIndicator,
                options: {
                  displayName: 'Cam Tilt',
                  variableName: 'CamTilt',
                  iconName: 'mdi-camera-retake',
                  variableUnit: '%',
                  variableMultiplier: 100,
                },
                hash: '31cc564a-a01e-456a-b181-f04ba512486a',
                managerVars: defaultMiniWidgetManagerVars,
              },
            ],
          },
          {
            name: 'Bottom-center container',
            widgets: [
              {
                hash: '7e1dd699-b336-4026-ad7d-f214aee5e4b7',
                component: MiniWidgetType.DepthIndicator,
                managerVars: defaultMiniWidgetManagerVars,
                options: {},
              },
              {
                component: MiniWidgetType.VeryGenericIndicator,
                options: {
                  displayName: 'Water Temp',
                  variableName: 'SCALED_PRESSURE2.temperature',
                  iconName: 'mdi-thermometer',
                  variableUnit: '°C',
                  variableMultiplier: '.01',
                },
                hash: '9ee52751-e828-4947-a7ce-0b2f3c2bc42f',
                managerVars: defaultMiniWidgetManagerVars,
              },
            ],
          },
          {
            name: 'Bottom-right container',
            widgets: [
              {
                hash: '837a6722-1e54-4ace-9a92-d9c5af059d16',
                component: MiniWidgetType.ArmerButton,
                managerVars: defaultMiniWidgetManagerVars,
                options: {},
              },
              {
                hash: 'c6301929-cdfc-48af-9fdd-c87ce65d7395',
                component: MiniWidgetType.ModeSelector,
                managerVars: defaultMiniWidgetManagerVars,
                options: {},
              },
              {
                hash: 'a4d0d6ce-9978-40f2-89ab-958f91137177',
                component: MiniWidgetType.MiniVideoRecorder,
                managerVars: defaultMiniWidgetManagerVars,
                options: {},
              },
            ],
          },
        ],
      },
      {
        hash: 'fc6abfcc-5a19-4e70-9a96-f03f6c55f1b3',
        name: 'Map View',
        widgets: [
          {
            hash: '80e785e1-31e2-4bfe-85d4-99fee6ca3f76',
            name: 'VirtualHorizon',
            component: WidgetType.VirtualHorizon,
            position: {
              x: 0.933,
              y: 0.054,
            },
            size: {
              width: 0.062,
              height: 0.118,
            },
            options: {},
            managerVars: defaultWidgetManagerVars,
          },
          {
            hash: '0a786865-0eff-408c-bc1d-a2b710222418',
            name: 'Compass',
            component: WidgetType.Compass,
            position: {
              x: 0.863,
              y: 0.054,
            },
            size: {
              width: 0.0614,
              height: 0.116,
            },
            options: {
              headingStyle: 'North Up',
            },
            managerVars: defaultWidgetManagerVars,
          },
          {
            hash: '0dd57510-2b14-4c94-82b9-f1c3baad01f0',
            name: 'VideoPlayer',
            component: WidgetType.VideoPlayer,
            position: {
              x: 0.00785,
              y: 0.0606,
            },
            size: {
              width: 0.291,
              height: 0.327,
            },
            options: {
              videoFitStyle: 'cover',
              flipHorizontally: false,
              flipVertically: false,
            },
            managerVars: defaultWidgetManagerVars,
          },
          {
            hash: '8a5c6fe7-9d8e-4f7b-a187-e6a29292bc5a',
            name: 'Map',
            component: WidgetType.Map,
            position: {
              x: 0,
              y: 0,
            },
            size: {
              width: 1,
              height: 1,
            },
            options: {
              showVehiclePath: true,
            },
            managerVars: defaultWidgetManagerVars,
          },
        ],
        miniWidgetContainers: [
          {
            name: 'Bottom-left container',
            widgets: [
              {
                component: MiniWidgetType.ViewSelector,
                options: {},
                hash: '0759321f-edd0-4f12-bce1-6a4ff0469a7a',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.VeryGenericIndicator,
                options: {
                  displayName: 'Pilot Gain',
                  variableName: 'PilotGain',
                  iconName: 'mdi-account-hard-hat',
                  variableUnit: '%',
                  variableMultiplier: 100,
                },
                hash: '6e3df171-7caa-457f-9dbe-a3e9b7184be1',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.VeryGenericIndicator,
                options: {
                  displayName: 'Lights (1)',
                  variableName: 'Lights1',
                  iconName: 'mdi-flashlight',
                  variableUnit: '%',
                  variableMultiplier: 100,
                },
                hash: '5676835a-1c22-457d-9349-2bad920512fd',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.VeryGenericIndicator,
                options: {
                  displayName: 'Cam Tilt',
                  variableName: 'CamTilt',
                  iconName: 'mdi-camera-retake',
                  variableUnit: '%',
                  variableMultiplier: 100,
                },
                hash: '1bab7dc9-72fe-4ade-868b-20a5a4d27741',
                managerVars: defaultMiniWidgetManagerVars,
              },
            ],
          },
          {
            name: 'Bottom-center container',
            widgets: [
              {
                component: MiniWidgetType.DepthIndicator,
                options: {},
                hash: 'afd47470-d7e8-41ba-ba7b-a00dab76f510',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.SatelliteIndicator,
                options: {},
                hash: '11cfd5aa-f71c-4f65-a8dc-fa475bbce1ec',
                managerVars: defaultMiniWidgetManagerVars,
              },
            ],
          },
          {
            name: 'Bottom-right container',
            widgets: [
              {
                component: MiniWidgetType.ArmerButton,
                options: {},
                hash: '30e66f52-04ab-45b7-afaf-c03ebc4be108',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.ModeSelector,
                options: {},
                hash: 'acee316f-dab1-44b0-aa1d-e7d75cdbecab',
                managerVars: defaultMiniWidgetManagerVars,
              },
            ],
          },
        ],
        showBottomBarOnBoot: true,
      },
      {
        hash: '795c3c97-c3f6-4a2d-b38f-d4ac8219bac0',
        name: 'HUD View',
        widgets: [
          {
            hash: 'ca363364-d049-49ef-b639-e706a279da1c',
            name: 'CompassHUD',
            component: WidgetType.CompassHUD,
            position: {
              x: 0.22,
              y: 0.87,
            },
            size: {
              width: 0.56,
              height: 0.062,
            },
            options: {
              showYawValue: true,
              hudColor: '#FFFFFF',
              useNegativeRange: false,
            },
            managerVars: defaultWidgetManagerVars,
          },
          {
            hash: '98e255e7-6ad4-4214-b8f9-5ddeec57f869',
            name: 'DepthHUD',
            component: WidgetType.DepthHUD,
            position: {
              x: 0.93,
              y: 0.15,
            },
            size: {
              width: 0.05,
              height: 0.7,
            },
            options: {
              showDepthValue: true,
              hudColor: '#FFFFFF',
            },
            managerVars: defaultWidgetManagerVars,
          },
          {
            hash: '85c0bf8a-b729-43c9-89cb-0f36b8248a08',
            name: 'Attitude',
            component: WidgetType.Attitude,
            position: {
              x: 0.2,
              y: 0.1,
            },
            size: {
              width: 0.6,
              height: 0.8,
            },
            options: {
              showCenterAim: true,
              showPitchLines: true,
              showRollPitchValues: false,
              desiredAimRadius: 150,
              pitchHeightFactor: 300,
              hudColor: '#FFFFFF',
            },
            managerVars: defaultWidgetManagerVars,
          },
          {
            hash: '57de5cb2-d7b2-4651-a8de-5dbbc5730aee',
            name: 'VideoPlayer',
            component: WidgetType.VideoPlayer,
            position: {
              x: 0,
              y: 0,
            },
            size: {
              width: 1,
              height: 1,
            },
            options: {
              videoFitStyle: 'cover',
              flipHorizontally: false,
              flipVertically: false,
            },
            managerVars: defaultWidgetManagerVars,
          },
        ],
        miniWidgetContainers: [
          {
            name: 'Bottom-left container',
            widgets: [
              {
                component: MiniWidgetType.ViewSelector,
                options: {},
                hash: 'd180e07f-156c-4025-a823-697318c04906',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.VeryGenericIndicator,
                options: {
                  displayName: 'Pilot Gain',
                  variableName: 'PilotGain',
                  iconName: 'mdi-account-hard-hat',
                  variableUnit: '%',
                  variableMultiplier: 100,
                },
                hash: 'b6004238-0e1c-4012-b570-2ecee57f75a3',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.VeryGenericIndicator,
                options: {
                  displayName: 'Lights (1)',
                  variableName: 'Lights1',
                  iconName: 'mdi-flashlight',
                  variableUnit: '%',
                  variableMultiplier: 100,
                },
                hash: '164ac246-291b-4a1d-bb2d-fdfdf88b1de9',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.VeryGenericIndicator,
                options: {
                  displayName: 'Cam Tilt',
                  variableName: 'CamTilt',
                  iconName: 'mdi-camera-retake',
                  variableUnit: '%',
                  variableMultiplier: 100,
                },
                hash: '23fc4b2b-0922-4225-b9cc-1dc87fb77b84',
                managerVars: defaultMiniWidgetManagerVars,
              },
            ],
          },
          {
            name: 'Bottom-center container',
            widgets: [
              {
                component: MiniWidgetType.DepthIndicator,
                options: {},
                hash: 'b3572cc4-f9a0-427a-90a1-1756e0694af5',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.VeryGenericIndicator,
                options: {
                  displayName: 'Water Temp',
                  variableName: 'SCALED_PRESSURE2.temperature',
                  iconName: 'mdi-thermometer',
                  variableUnit: '°C',
                  variableMultiplier: '.01',
                },
                hash: 'ba554289-246e-44a8-b4b2-dfdb6672ea00',
                managerVars: defaultMiniWidgetManagerVars,
              },
            ],
          },
          {
            name: 'Bottom-right container',
            widgets: [
              {
                component: MiniWidgetType.ArmerButton,
                options: {},
                hash: '0a85fc48-d8b2-4e8c-bb24-c326ffc0d2ed',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.ModeSelector,
                options: {},
                hash: 'ec66aedd-6cce-4533-bfa9-8e3c36906688',
                managerVars: defaultMiniWidgetManagerVars,
              },
              {
                component: MiniWidgetType.MiniVideoRecorder,
                options: {},
                hash: '111563f5-78cf-45b4-bc98-a81d1defed66',
                managerVars: defaultMiniWidgetManagerVars,
              },
            ],
          },
        ],
        showBottomBarOnBoot: true,
      },
    ],
  },
  {
    name: 'Boat default',
    hash: 'adb7d856-f2e5-4980-aaeb-c39c1fa3562b',
    views: [
      {
        hash: 'f8a76470-9122-44f7-97f7-4555a59ee9c4',
        name: 'Map view',
        showBottomBarOnBoot: true,
        widgets: [
          {
            hash: '6439e791-3031-4928-aff2-8bd9af713798',
            name: 'Main Map',
            component: WidgetType.Map,
            position: { x: 0, y: 0 },
            size: { width: 1, height: 1 },
            managerVars: defaultWidgetManagerVars,
            options: {},
          },
        ],
        miniWidgetContainers: [
          {
            name: 'Bottom-left container',
            widgets: [
              {
                hash: 'c6eb406b-8e3c-4ab9-a348-4ad5058352be',
                component: MiniWidgetType.ViewSelector,
                managerVars: defaultMiniWidgetManagerVars,
                options: {},
              },
            ],
          },
          { name: 'Bottom-center container', widgets: [] },
          { name: 'Bottom-right container', widgets: [] },
        ],
      },
    ],
  },
]
export const widgetProfile = widgetProfiles[0]

export const miniWidgetsProfiles: MiniWidgetProfile[] = [
  {
    name: 'Default Cockpit Mini Widget profile',
    containers: [
      {
        name: 'Top-right container',
        widgets: [
          {
            hash: '5b21cf5b-5849-413a-8bee-f1c4b42522f8',
            component: MiniWidgetType.BaseCommIndicator,
            managerVars: defaultMiniWidgetManagerVars,
            options: {},
          },
          {
            hash: '41354445-2057-4574-80f5-bdc6d394dfe7',
            component: MiniWidgetType.JoystickCommIndicator,
            managerVars: defaultMiniWidgetManagerVars,
            options: {},
          },
          {
            hash: '7b31c4c4-e273-4f75-b0b7-d56263c4177d',
            component: MiniWidgetType.BatteryIndicator,
            managerVars: defaultMiniWidgetManagerVars,
            options: {},
          },
        ],
      },
    ],
  },
]
export const miniWidgetsProfile = miniWidgetsProfiles[0]
