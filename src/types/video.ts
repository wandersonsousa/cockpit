import { WebRTCManager } from '@/composables/webRTC'
import type { Stream } from '@/libs/webrtc/signalling_protocol'

/**
 * Everything needed for every stream
 */
export interface StreamData {
  /**
   * The actual WebRTC stream
   */
  stream: Stream | undefined
  /**
   * The responsible for its management
   */
  webRtcManager: WebRTCManager
  /**
   * MediaStream object, if WebRTC stream is chosen
   */
  mediaStream: MediaStream | undefined
  /**
   * MediaRecorder object for that stream
   */
  mediaRecorder: MediaRecorder | undefined
  /**
   * Date object with info on when a recording was started, if so
   */
  timeRecordingStart: Date | undefined
}
