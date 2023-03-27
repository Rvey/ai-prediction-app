import { Box, Divider, Typography } from "@mui/joy";
import CarouselWrapper from "../hooks/CarouselWrapper";

const DataVisualization = () => {
  return (
    <div>
      <CarouselWrapper
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{ textAlign: "center", mb: 2, fontSize: 24 }}
        >
          Data Visualization
        </Typography>
        <Divider sx={{ mb: 5 }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <a
            data-fancybox="gallery"
            href="./../src/assets/charts/highestByModel.png"
          >
            <img
              src="./../src/assets/charts/highestByModel.png"
              width="200"
              height="150"
            />
          </a>
          <a
            data-fancybox="gallery"
            href="./../src/assets/charts/lowestPhoneByBrand.png"
          >
            <img
              src="./../src/assets/charts/lowestPhoneByBrand.png"
              width="200"
              height="150"
            />
          </a>
          <a
            data-fancybox="gallery"
            href="./../src/assets/charts/lowestPhonePriceByModel.png"
          >
            <img
              src="./../src/assets/charts/lowestPhonePriceByModel.png"
              width="200"
              height="150"
            />
          </a>
          <a
            data-fancybox="gallery"
            href="./../src/assets/charts/maxPriceByBrand.png"
          >
            <img
              src="./../src/assets/charts/maxPriceByBrand.png"
              width="200"
              height="150"
            />
          </a>
          <a
            data-fancybox="gallery"
            href="./../src/assets/charts/minPriceForEachModel.png"
          >
            <img
              src="./../src/assets/charts/minPriceForEachModel.png"
              width="200"
              height="150"
            />
          </a>
          <a
            data-fancybox="gallery"
            href="./../src/assets/charts/minimumPriceByBrand.png"
          >
            <img
              src="./../src/assets/charts/minimumPriceByBrand.png"
              width="200"
              height="150"
            />
          </a>
    
          <a data-fancybox="gallery" href="./../src/assets/charts/priceRange.png">
            <img
              src="./../src/assets/charts/priceRange.png"
              width="200"
              height="150"
            />
          </a>
          <a
            data-fancybox="gallery"
            href="./../src/assets/charts/totalOffersForEachBrand.png"
          >
            <img
              src="./../src/assets/charts/totalOffersForEachBrand.png"
              width="200"
              height="150"
            />
          </a>
        </Box>
      </CarouselWrapper>
    </div>
  );
};
export default DataVisualization;
