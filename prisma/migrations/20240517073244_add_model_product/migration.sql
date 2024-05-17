-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "prod_name" TEXT NOT NULL,
    "prod_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
