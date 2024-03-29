import z from "zod";
import { pagingRequest } from "./common.schema";

/**
 * @openapi
 * components:
 *   schema:
 *     Cuisine:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           readOnly: true
 *         name:
 *           type: string
 *
 */

export const getCuisinesSchema = z.object({
    query: z
        .object({
            name: z.string().optional(),
        })
        .extend(pagingRequest.shape),
});

export const cuisineSchema = z.object({
    id: z.number(),
    name: z.string(),
});

export type CuisineSchema = z.TypeOf<typeof cuisineSchema>;
export type GetCuiSinesSchema = z.TypeOf<typeof getCuisinesSchema>;
export type GetCuiSinesQuerySchema = z.TypeOf<
    typeof getCuisinesSchema
>["query"];
