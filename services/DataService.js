export class DataService {
  day_time;
  seconds;
  calculate(param) {
    return Math.floor(param - 273);
  }

  pritifyData(json) {
    this.day_time = new Date();
    this.seconds = Math.floor(this.day_time.getTime() / 1000);
    if (json.cod === '200') {
      let data = null;
      for (let datas of json.list) {
        const date = datas.dt;
        if (this.seconds < date) {
          data = datas;
          break;
        }
      }
      if (data) {
        let natija = {
          current: this.getCurrentForecast(json, data),
          daily: this.getDailyForecast(json, data),
          details: this.details(data),
        };
        return natija;
      } else {
        throw new Error('relative Date Error');
      }
    } else {
      return {error: 'Location not found!'};
    }
  }

  getCurrentForecast(json, data) {
    return {
      temp: this.calculate(data.main.temp),
      main: data.weather[0].main,
      city: json.city.name,
      time: this.identifyTime(json.city.sunset, json.city.sunrise),
    };
  }

  identifyTime(sunset, sunrise) {
    if (sunrise <= this.seconds && sunset >= this.seconds) {
      return false;
    }
    return true;
  }

  getDailyForecast(json) {
    let days = new Array(
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    );
    let array = json.list.filter(data => {
      const checkpoint = new Array('00:00:00', '12:00:00');
      if (
        data.dt_txt.search(checkpoint[0]) != -1 ||
        data.dt_txt.search(checkpoint[1]) != -1
      ) {
        return true;
      }
      return false;
    });
    array.forEach((data, i, arr) => {
      arr[i] = {
        main: data.weather[0].main,
        temp: this.calculate(data.main.temp),
        icon: data.weather[0].icon,
        week_day: days[new Date(data.dt * 1000).getDay()],
      };
    });
    let dataArray = new Array();
    let rel = this.identifyTime(json.city.sunset, json.city.sunrise);
    for (let i = 0; i < 5; i++) {
      dataArray.push({
        id: i.toString(),
        week_day: array[i * 2].week_day,
        night: array[i * 2].temp,
        day: array[i * 2 + 1].temp,
        icon: !rel ? array[i * 2 + 1].icon : array[i * 2].icon,
        main: !rel ? array[i * 2 + 1].main : array[i * 2].main,
      });
    }
    return {
      days: dataArray,
    };
  }

  details(data) {
    return {
      feels_like: this.calculate(data.main.feels_like),
      cloud: data.clouds.all,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    };
  }
}
