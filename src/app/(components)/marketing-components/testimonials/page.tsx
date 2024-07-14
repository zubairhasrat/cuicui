import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import MarqueeVariant1 from "./marquee/variant1";
import MarqueeVariant2 from "./marquee/variant2";
import { TestimonialsVariant1 } from "./testimonials-component/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="md"
        componentList={[
          {
            variantName: "On hover effect",
            component: <TestimonialsVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "testimonials",
              variantName: "/testimonials-component/variant1",
            }),
          },
        ]}
        title="Testimonials"
        description="A simple testimonials component with a slider on click"
      />
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "Horizontal",
            component: <MarqueeVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "testimonials",
              variantName: "marquee/variant1",
            }),
          },
          {
            variantName: "Vertical",
            component: <MarqueeVariant2 />,
            code: await getFileContentAsString({
              componentSlug: "testimonials",
              variantName: "marquee/variant2",
            }),
          },
        ]}
        title="Marquee"
        description="A simple marquee component with two variants, horizontal and vertical."
      />
    </>
  );
}
