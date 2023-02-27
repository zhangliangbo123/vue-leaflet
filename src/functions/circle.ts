import { propsToLeafletOptions } from "@src/utils";

import { circleMarkerProps, setupCircleMarker } from "./circleMarker";

export const circleProps = {
  ...circleMarkerProps,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number,
  },
} as const;

export const setupCircle = (props, leafletRef, context) => {
  const { options: circleMarkerOptions, methods: circleMarkerMethods } =
    setupCircleMarker(props, leafletRef, context);

  const options = propsToLeafletOptions(
    props,
    circleProps,
    circleMarkerOptions
  );

  const methods = {
    ...circleMarkerMethods,
  };

  return { options, methods };
};