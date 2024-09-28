const columnDescriptions = {
    date: "The date of the reported data (format: YYYY-MM-DD).",
    country_name: "The name of the country reporting the data.",
    country_code: "The ISO code representing the country.",
    new_confirmed: "The number of new confirmed COVID-19 cases reported on that date.",
    new_deceased: "The number of new deaths reported on that date due to COVID-19.",
    new_recovered: "The number of new recoveries reported on that date.",
    cumulative_confirmed: "The total number of confirmed COVID-19 cases reported up to that date.",
    cumulative_deceased: "The total number of deaths reported due to COVID-19 up to that date.",
    cumulative_recovered: "The total number of recoveries reported up to that date.",
    subregion1_name: "The name of the region or state within the country (if applicable).",
};

module.exports = columnDescriptions;
