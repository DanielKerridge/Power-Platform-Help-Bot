Date: 
<link-entity name="msevtmgt_event" from="msevtmgt_eventid" to="mac_eventtraining" adx:uiname="Start Date Filter" adx:uiinputtype="dynamic">
<filter type="or">
<condition attribute="msevtmgt_eventstartdate" operator="on-or-after" uiname="DateFilter" uitype="msevtmgt_eventstartdate" adx:uiinputtype="dynamic" />
</filter>
</link-entity>



Event type with linked entity:
<link-entity name="msevtmgt_event" from="msevtmgt_eventid" to="mac_eventtraining" adx:uiname="Event Type">
<filter type="or">
<condition attribute="mac_eventformat" operator="eq" value="d93ae2f3-6230-ec11-b6e6-00224810edfc" uiname="Online" uitype="mac_eventformat" adx:uiinputtype="dropdown" />
<condition attribute="mac_eventformat" operator="eq" value="206b5a24-3628-ec11-b6e6-002248112533" uiname="Onsite" uitype="mac_eventformat" adx:uiinputtype="dropdown" />
</filter>
</link-entity>
