import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { SectionNewsletter } from "../../components/SectionNewsletter";
import { Box, BoxImage, Grid } from "./styled";

import Image1 from "../../assets/icon-01.png";
import Image2 from "../../assets/icon-02.png";
import Image3 from "../../assets/icon-03.png";
import Image4 from "../../assets/icon-04.png";

export function Program() {
  return (
    <>
      <Grid>
        <Box>
          <div>
            <h4>Flair Cocktails</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque fermentum urna vitae aliquet laoreet. In hac
              habitasse platea dictumst. Fusce semper arcu sed velit dapibus,
              sit amet ultricies nulla ullamcorper. Donec vestibulum convallis
              feugiat. Donec non dui turpis. Suspendisse a sem ac diam venenatis
              luctus id vel lacus. Mauris quis massa commodo, consectetur orci
              at, vulputate sapien.
            </p>
          </div>
          <BoxImage src={Image1} alt="" />
        </Box>
        <Box>
          <BoxImage src={Image2} alt="" />
          <div>
            <h4>Haloween Treats</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque fermentum urna vitae aliquet laoreet. In hac
              habitasse platea dictumst. Fusce semper arcu sed velit dapibus,
              sit amet ultricies nulla ullamcorper. Donec vestibulum convallis
              feugiat. Donec non dui turpis. Suspendisse a sem ac diam venenatis
              luctus id vel lacus. Mauris quis massa commodo, consectetur orci
              at, vulputate sapien.
            </p>
          </div>
        </Box>
        <Box>
          <div>
            <h4>Ghost Dance</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque fermentum urna vitae aliquet laoreet. In hac
              habitasse platea dictumst. Fusce semper arcu sed velit dapibus,
              sit amet ultricies nulla ullamcorper. Donec vestibulum convallis
              feugiat. Donec non dui turpis. Suspendisse a sem ac diam venenatis
              luctus id vel lacus. Mauris quis massa commodo, consectetur orci
              at, vulputate sapien.
            </p>
          </div>
          <BoxImage src={Image3} alt="" />
        </Box>
        <Box>
          <BoxImage src={Image4} alt="" />
          <div>
            <h4>Scary Activities</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque fermentum urna vitae aliquet laoreet. In hac
              habitasse platea dictumst. Fusce semper arcu sed velit dapibus,
              sit amet ultricies nulla ullamcorper. Donec vestibulum convallis
              feugiat. Donec non dui turpis. Suspendisse a sem ac diam venenatis
              luctus id vel lacus. Mauris quis massa commodo, consectetur orci
              at, vulputate sapien.
            </p>
          </div>
        </Box>
      </Grid>

      <SectionNewsletter />
    </>
  );
}
