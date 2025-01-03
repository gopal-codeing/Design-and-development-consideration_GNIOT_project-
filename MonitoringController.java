@RestController
@RequestMapping("/api")
public class MonitoringController {

    @Autowired
    private ActivityService activityService;

    @PostMapping("/logActivity")
    public ResponseEntity<String> logActivity(@RequestBody ActivityLog log) {
        activityService.saveActivity(log);
        return ResponseEntity.ok("Activity logged successfully");
    }

    @GetMapping("/filter")
    public ResponseEntity<Boolean> filterContent(@RequestParam String url) {
        boolean isAllowed = activityService.isAllowedUrl(url);
        return ResponseEntity.ok(isAllowed);
    }

    @GetMapping("/analytics")
    public ResponseEntity<List<ActivityLog>> getAnalytics(@RequestParam String childId) {
        List<ActivityLog> logs = activityService.getActivityLogsByChild(childId);
        return ResponseEntity.ok(logs);
    }
}
