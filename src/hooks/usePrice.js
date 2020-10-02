import { useState, useEffect } from "react";
import { Alert } from "react-native";
import axios from "axios";

export default () => {
  const [price, setPrice] = useState();

  const getPrice = () => {
    try {
      axios
        .get(
          "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/"
        )
        .then((response) => {
          const avgPrice = getAverage(response.data);
          setPrice(avgPrice);
        });
    } catch (e) {
      Alert.alert(`Something went wrong.`);
      console.log(e);
    }
  };

  const getAverage = (data) => {
    const listaGasolineras = data.ListaEESSPrecio;
    const gasolinerasGrano = listaGasolineras.filter(gasolinera => gasolinera["Localidad"] == "GRANOLLERS");
    let prices = []

    // Añade los precios de todas las gasolineras de Granollers
    for (let i = 0; i < gasolinerasGrano.length; i++) {
      let price = gasolinerasGrano[i]["Precio Gasolina 95 E5"];
      price = price.replace(",", "."); // Los precios vienen con decimales españoles, pasarlos a ingleses
      prices.push(Number(price));
    }

    const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length

    // Devuelve la media
    return avgPrice.toFixed(3);
  };

  useEffect(() => {
    getPrice();
  }, []);

  return price;
};
