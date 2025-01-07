import { types } from "mobx-state-tree";

import { AudioRegionModel } from "./AudioRegion";
import { BrushRegionModel, HtxBrush } from "./BrushRegion";
import { ParagraphsRegionModel } from "./ParagraphsRegion";
import { TimeSeriesRegionModel } from "./TimeSeriesRegion";
import { HtxKeyPoint, KeyPointRegionModel } from "./KeyPointRegion";
import { PolygonPoint, PolygonPointView } from "./PolygonPoint";
import { HtxPolygon, PolygonRegionModel } from "./PolygonRegion";
import { HtxLine, LineRegionModel } from "./LineRegion";
import { HtxRectangle, RectRegionModel } from "./RectRegion";
import { EllipseRegionModel, HtxEllipse } from "./EllipseRegion";
import { HtxTextAreaRegion, TextAreaRegionModel } from "./TextAreaRegion";
import { RichTextRegionModel } from "./RichTextRegion";
import { TimelineRegionModel } from "./TimelineRegion";
import { VideoRectangleRegionModel } from "./VideoRectangleRegion";

const AllRegionsType = types.union(
  AudioRegionModel,
  BrushRegionModel,
  EllipseRegionModel,
  TimeSeriesRegionModel,
  KeyPointRegionModel,
  LineRegionModel,
  PolygonRegionModel,
  RectRegionModel,
  TextAreaRegionModel,
  RichTextRegionModel,
  TimeSeriesRegionModel,
  TimelineRegionModel,
  ParagraphsRegionModel,
  VideoRectangleRegionModel,
);

export {
  AllRegionsType,
  AudioRegionModel,
  BrushRegionModel,
  EllipseRegionModel,
  HtxBrush,
  HtxEllipse,
  HtxKeyPoint,
  HtxLine,
  HtxPolygon,
  HtxRectangle,
  HtxTextAreaRegion,
  LineRegionModel,
  RichTextRegionModel,
  ParagraphsRegionModel,
  TimeSeriesRegionModel,
  KeyPointRegionModel,
  PolygonPoint,
  PolygonPointView,
  PolygonRegionModel,
  RectRegionModel,
  TextAreaRegionModel,
  TimelineRegionModel,
  VideoRectangleRegionModel,
};
