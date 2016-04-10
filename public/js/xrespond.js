
var Xrespond = {
  local: XrespondLocal(),
  devices: function() {
    return Devices
  },
  devices_grouped: function() {
    return this.group_devices_by_type(this.devices())
  },
  devices_search: function(term) {
    var options = {
      extract: function(d) {
        return _.toArray(_.pick(d, 'type', 'name', 'width', 'height')).join(' ')
      }
    }
    var results = fuzzy.filter(term, this.devices(), options)
    var matches = _.pluck(results, 'original')

    return this.group_devices_by_type(matches)
  },
  group_devices_by_type: function(devices) {
    return _.groupBy(devices, function(d) { return d.type })
  },
  resetKeys: function(o, i) {
    o.id = i
    return o
  }
}

