/*import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
   
  import type { OurFileRouter } from "@/app/api/uploadthing/core.ts";
   
  export const UploadButton = generateUploadButton<OurFileRouter>();
  export const UploadDropzone = generateUploadDropzone<OurFileRouter>();*/
  import { generateReactHelpers } from "@uploadthing/react/hooks";
  import type { OurFileRouter } from "@/app/api/uploadthing/core.ts";

  export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
