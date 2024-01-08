[![Twitter: romy](https://img.shields.io/twitter/follow/RomySihananda)](https://twitter.com/RomySihananda)

# subs-counter

![](https://raw.githubusercontent.com/RomySaputraSihananda/RomySaputraSihananda/main/images/uytrfvjm.jpeg)

Rest API to show detail counter of subscribers and views from channel youtube

## Requirements

- **node >= 20.8.1**,
- **express >= 4.18.2**,
- **swagger-ui-express >= ^5.0.0**

## Installation

```sh
# Clonig Repository
git clone https://github.com/romysaputrasihananda/subs-counter

# Change Directory
cd subs-counter

# Install Requirement
npm i
```

## Running

```sh
# start the server
npm start
```

## EndPoints

The following is a list of available Request URIs:

- **Swagger Documentation**

  - | URL                                 | Method | Information           |
    | :---------------------------------- | :----: | :-------------------- |
    | [/docs](http://localhost:4444/docs) |  GET   | Swagger Documentation |

- **Bank Controller**

  - | URL                                                          | Method | Information                          |
    | :----------------------------------------------------------- | :----: | :----------------------------------- |
    | [/api/v1/bank](http://localhost:4444/api/v1/search/{name})   |  GET   | API for get channel id and detail    |
    | [/api/v1/ewallet](http://localhost:4444/api/v1/channel/{id}) |  GET   | API for get views and videos counter |

## License

This project is licensed under the [MIT License](LICENSE).
