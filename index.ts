export { Algorithm, SolveStatus, DebugMode, Constraint_Alignment, InternalAlignmentType,
        type GcsSystem, type GcsSystemConstructor } from "./planegcs_dist/gcs_system.js";
export { type ModuleStatic } from "./planegcs_dist/planegcs.js";
export { type SketchPrimitive, type SketchGeometry, type SketchParam,
         type SketchPoint, type SketchLine, type SketchCircle,
         type SketchArc, type SketchEllipse, type SketchArcOfEllipse,
        is_sketch_constraint, is_sketch_geometry, get_referenced_sketch_params, get_constrained_primitive_ids } from "./sketch/sketch_primitive.js";
export { SketchIndex } from "./sketch/sketch_index.js";
export * from "./planegcs_dist/constraints.js";

import init_planegcs_module from "./planegcs_dist/planegcs.js";
export { init_planegcs_module };

import { GcsWrapper } from "./sketch/gcs_wrapper.js"; 
export { GcsWrapper };

export async function make_gcs_wrapper(wasm_path?: string) { 
    const module = await init_planegcs_module(
        wasm_path ? { locateFile: () => wasm_path } : undefined
    );
    const gcs = new module.GcsSystem();

    return new GcsWrapper(gcs);
}