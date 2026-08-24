import { createServerFn } from "@tanstack/react-start";
import { submissionSchema } from "./diagnostic-schema";

export const saveDiagnostic = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => submissionSchema.parse(input))
  .handler(async ({ data }) => {
    const { insertSubmission } = await import("./diagnostic-server.server");
    return insertSubmission(data);
  });
