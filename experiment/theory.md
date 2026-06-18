Open channel flow refers to the flow of a liquid with a free surface exposed to atmospheric pressure. Unlike flow through closed pipes, open channel flow occurs primarily under the influence of gravity. Rivers, canals, irrigation channels, drainage systems, and spillways are common examples of open channels.

The measurement of flow rate in open channels is important in many areas of hydraulic engineering. Accurate discharge measurements are required for water supply systems, irrigation networks, flood control projects, wastewater management, and environmental studies. One of the most widely used methods for measuring discharge in open channels is by means of weirs.

A weir is a vertical obstruction placed across an open channel that forces water to flow over a crest. The height of water above the crest is related to the discharge passing through the channel. Depending on the shape of the opening, sharp-crested weirs are commonly classified as rectangular and triangular (V-notch) weirs.

A well-designed weir produces subcritical flow upstream and critical flow over the crest. As water flows over the crest, it forms a free sheet of water known as the **nappe**. Proper ventilation beneath the nappe ensures that atmospheric pressure exists below the flowing water, thereby improving the accuracy of discharge measurements.

The flow over a weir is governed by the principles of conservation of mass and conservation of energy. Bernoulli's theorem states that the total mechanical energy of a steady, incompressible, and frictionless fluid flowing along a streamline remains constant and may be expressed as

$$
\frac{P}{\rho g}
+
\frac{V^2}{2g}
+
Z
=

\text{Constant}.
$$

Where:

- $P$ = Pressure of the fluid, $\mathrm{N/m^2}$,
- $\rho$ = Density of the fluid, $\mathrm{kg/m^3}$,
- $V$ = Velocity of flow, $\mathrm{m/s}$,
- $g$ = Acceleration due to gravity, $\mathrm{m/s^2}$,
- $Z$ = Elevation above a reference datum, $\mathrm{m}$.

For the analysis of flow over sharp-crested weirs, the following assumptions are made:

- The upstream velocity distribution is uniform.
- Streamlines over the crest are approximately horizontal.
- The pressure beneath the nappe is atmospheric.
- Energy losses due to turbulence are neglected.
- Surface tension effects are negligible.

Under these assumptions, the theoretical discharge over a rectangular weir is given by

$$
Q_t=
\frac{2}{3}
L
\sqrt{2g}
H^{3/2},
$$

where

- $Q_t$ = Theoretical discharge,
- $L$ = Length of the weir crest,
- $H$ = Head of water above the crest.

For a triangular or V-notch weir having notch angle $\theta$, the theoretical discharge is

$$
Q_t=
\frac{8}{15}
\tan\left(\frac{\theta}{2}\right)
\sqrt{2g}
H^{5/2}.
$$

In practice, frictional and viscous effects reduce the discharge slightly. The actual discharge is therefore related to the theoretical discharge by the coefficient of discharge,

$$
C_d=
\frac{Q_a}{Q_t},
$$

where

- $Q_a$ = Actual discharge,
- $Q_t$ = Theoretical discharge.

<div style="text-align: center;"><img src="images/figure1.png"></div>

<div style="text-align: center;"><em>Figure 1: Flow over a sharp-crested weir showing the head over the crest and the nappe.</em></div>

The experimental setup consists of an open channel fitted with interchangeable rectangular and triangular sharp-crested weirs. Water is supplied to the channel at different flow rates, and the upstream water level is measured using a point gauge to determine the head over the crest. The actual discharge is measured by collecting water in a measuring tank over a known interval of time, while the theoretical discharge is calculated using the appropriate weir equation.

<div style="text-align: center;"><img src="images/figure2.png"></div>

<div style="text-align: center;"><em>Figure 2: Experimental setup for determining the discharge through sharp-crested weirs in an open channel.</em></div>

The discharge characteristics of the weirs are studied by plotting suitable graphs between the discharge and the head over the crest. For a rectangular weir,

$$
Q\propto H^{3/2},
$$

while for a triangular weir,

$$
Q\propto H^{5/2}.
$$

Sharp-crested weirs are extensively used in irrigation canals, rivers, hydraulic laboratories, water treatment plants, and stormwater drainage systems for the measurement and regulation of flow. The determination of the coefficient of discharge provides valuable information for the calibration and design of hydraulic structures used in open channel flow measurement.
